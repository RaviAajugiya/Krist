import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { number } from "yup";
import { cartApi } from "./cartApi";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/ecommerce/products",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        method: "GET",
      }),
    }),
    getProductById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/${id}`,
      }),
    }),
    getListingProduct: builder.query({
      query: (args) => {
        const { page, limit } = args;
        return {
          url: `?page=${page}&limit=${limit}`,
        };
      },
    }),
    // getProductByCategory: builder.query({
    //   query: (id) => ({
    //     url: `/category/${id}`,
    //     method: "GET",
    //   }),
    // }),

    // getFilteredProduct: builder.query({
    //   query: async ({ categoryId, minPrice, maxPrice }) => {
    //     if (!categoryId) {
    //       categoryId =
    //         "65b7a50651a28f9e5f2f4da2,65b9d7f02e9e4f3ae7ea326c,65b7a51151a28f9e5f2f4da6,65b7a51d51a28f9e5f2f4daa";
    //     }

    //     const categoryIds = categoryId.split(",");
    //     console.log(categoryIds);

    //     const requests = categoryIds.map(async (categoryId) => {
    //       const response = await fetch(
    //         `http://localhost:8080/api/v1/ecommerce/products/category/${categoryId}`
    //       );
    //       return response.formData.products.json();
    //     });

    //     const results = await Promise.all(requests);
    //     console.log(results);
    //   },
    // }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetListingProductQuery,
  useGetProductByIdQuery,
  // useGetFilteredProductQuery,
} = productApi;
