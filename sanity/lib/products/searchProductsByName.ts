import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (searchParam: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
    *[
      _type == "product"
      && name match $searchParam
    ] | order(name asc)  
  `);

  try {
    // Sanity fecth to perform the search with a wildcard appended
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}*`, // Wildcard appended *
      },
    });

    return products.data || []; // Return the array of products or an empty array if none are found.
  } catch (error) {
    console.error("Error while fetching the products by name", error);

    return [];
  }
};
