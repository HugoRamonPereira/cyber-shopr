"use client";

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import React from "react";
import { TrolleyIcon, PackageIcon, SearchIcon } from "@sanity/icons";
import useCartStore from "@/store/store";

export default function Header() {
  const { user } = useUser();
  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      <div className="flex w-full max-w-[100rem] flex-wrap justify-between items-center mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold text-violet-500 hover:opacity-80 transition-opacity duration-150 cursor-pointer mx-auto sm:mx-0"
        >
          Cyber Shopr
        </Link>
        <Form
          action="/search"
          className="w-full max-w-lg sm:w-auto sm:flex-1 sm:mx-4 sm:mt-0 relative"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for tech products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-80 border w-full max-w-4xl pl-10"
          />
          <SearchIcon className="absolute top-2 left-2 w-6 h-6 text-gray-400" />
        </Form>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href="/cart"
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center gap-1 bg-violet-500 hover:bg-violet-500/85 transition-colors duration-150 text-white py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6 mb-0.5" />
            {/* Span item count since it is used in our global store */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
            <span>My Cart</span>
          </Link>
          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/orders"
                className="flex flex-1 relative justify-center sm:justify-start sm:flex-none items-center gap-1 bg-violet-500 hover:bg-violet-500/85 transition-colors duration-150 text-white py-2 px-4 rounded"
              >
                <PackageIcon className="w-6 h-6" strokeWidth={1.2} />
                <span>My Orders</span>
              </Link>
            </SignedIn>

            {user ? (
              <div className="flex items-center gap-1">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}
