import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { number } from "yup";

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
  }),
});

export const {
  useGetAllProductsQuery,
  useGetListingProductQuery,
  useGetProductByIdQuery,
} = productApi;
