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
    getFilteredProduct: builder.query({
      query: ({ categoryId, minPrice, maxPrice }) => {
        if (!categoryId) {
          categoryId =
            "65b7a50651a28f9e5f2f4da2,65b7a51151a28f9e5f2f4da6,65b7a51d51a28f9e5f2f4daa";
        }
        const requests = categoryId.split(",").map((categoryId) => ({
          url: `/category/${categoryId}`,
          method: "GET",
        }));
        // console.log(categoryId, 'cat')
        
        return Promise.all(requests.map((request) => fetchBaseQuery(request)));
      },
      transformResponse: (responses, meta, arg) => {
        const { minPrice, maxPrice } = arg;

        const products = responses.data.products.flatMap(
          (response) => response
        );

        return products.filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetListingProductQuery,
  useGetProductByIdQuery,
  useGetFilteredProductQuery,
} = productApi;
