// This helper function was created to help get the image source via URL
// and make it possible to be shown in the ProductThumbnail.tsx component
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export function imageUrl(source: SanityImageSource) {
  return builder.image(source);
}
