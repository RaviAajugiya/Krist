import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/ecommerce/cart/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice.userData.data.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => ({
        method: "GET",
      }),
      invalidatesTags: ["Cart"],
    }),
    addToCart: builder.mutation({
      query: (args) => {
        const { id, quantity } = args;
        return {
          url: `item/${id}`,
          method: "POST",
          body: { quantity },
        };
      },
      invalidatesTags: ["Cart"],
    }),
    deleteCartItem: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `item/${id}`,
      }),
    }),
    invalidatesTags: ["Cart"],
  }),
});

export const {
  useGetCartItemsQuery,
  useAddToCartMutation,
  useDeleteCartItemMutation,
} = cartApi;
