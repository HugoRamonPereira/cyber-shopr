import { metadata } from "./../app/studio/layout";
("use server");

import { CartItem } from "@/store/store";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};

export type GroupedCartItem = {
  product: CartItem["product"];
  quantity: number;
};

export async function createCheckoutSession(
  items: GroupedCartItem[],
  metadata: Metadata
) {
  try {
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
}
