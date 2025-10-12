"use client";

import {
  createCheckoutSession,
  Metadata,
} from "@/actions/createCheckoutSession";
import AddToCartButton from "@/components/AddToCartButton";
import Loader from "@/components/Loader";
import { imageUrl } from "@/lib/imageUrl";
import { formatPrice } from "@/lib/priceFormatter";
import useCartStore from "@/store/store";
import { SignInButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function CartPage() {
  const groupedItems = useCartStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect meant for the waiting of the client to mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader size="xl" />;
  }

  if (groupedItems.length === 0) {
    return (
      <div className="container mx-auto p-4 flec flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>
        <p className="text-gray-600 text-lg">Your cart is empty</p>
      </div>
    );
  }

  const handleCheckout = async () => {
    if (!isSignedIn) return;
    setIsLoading(true);

    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "Unknown",
        clerkUserId: user!.id,
      };

      const checkoutUrl = await createCheckoutSession(groupedItems, metadata);

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-4">Cart Page</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {/* Cart Items */}
          {groupedItems?.map((item) => (
            <div
              key={item.product._id}
              className="mb-4 p-4 border rounded flex items-center justify-between"
            >
              <div
                className="flex items-center cursor-pointer flex-1 min-w-0"
                onClick={() =>
                  router.push(`/product/${item.product.slug?.current}`)
                }
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mr-4">
                  {item.product.image && (
                    <Image
                      src={imageUrl(item.product.image).url()}
                      alt={item.product.name ?? "Product image"}
                      className="w-full h-full object-cover rounded"
                      width={96}
                      height={96}
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold truncate">
                    {item.product.name}
                  </h2>
                  <p className="text-sm sm:text-base">
                    Price:{" "}
                    {/* {((item.product.price ?? 0) * item.quantity).toFixed(2)} */}
                    {formatPrice((item.product.price ?? 0) * item.quantity)}
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-4 flex-shrink-0">
                <AddToCartButton product={item.product} />
              </div>
            </div>
          ))}
        </div>
        {/* Order Summary */}
        <div className="w-full lg:w-80 lg:sticky lg:top-4 h-fit bg-white p-6 border rounded oder-first lg:order-last fixed bottom-0 left-0 lg:left-auto">
          <h3 className="text-xl lg:text-2xl font-semibold">Order Summary</h3>
          <div className="my-5 space-y-4">
            <p className="flex justify-between">
              <span>Items:</span>
              <span>
                {groupedItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </p>
            <p className="flex justify-between text-2xl font-bold border-t pt-4">
              <span>Total:</span>
              <span>
                {formatPrice(useCartStore.getState().getTotalPrice())}
              </span>
            </p>
          </div>

          {isSignedIn ? (
            <button
              className="mt-10 w-full bg-violet-500 text-white px-4 py-2.5 rounded hover:bg-violet-500/85 transition-colors duration-150 disabled:bg-violet-100 disabled:border disabled:border-violet-500 font-medium text-lg disabled:cursor-not-allowed flex items-center justify-center"
              onClick={handleCheckout}
              disabled={isLoading}
            >
              {isLoading ? (
                <p className="text-violet-500">Processing...</p>
              ) : (
                "Proceed to Checkout"
              )}
            </button>
          ) : (
            <SignInButton mode="modal">
              <button className="mt-4 w-full bg-violet-500 text-white px-4 py-4 rounded hover:bg-violet-500/85 transition-colors duration-150 font-medium text-lg min-h-[60px]">
                Sign in to Checkout
              </button>
            </SignInButton>
          )}
        </div>

        <div className="h-64 lg:h-0 bg-fu">
          {/* Spacer for mobile cases where we might have too many products in the cart page we need to have some room for the Order Summary to be still visible and the user be able to scroll */}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
