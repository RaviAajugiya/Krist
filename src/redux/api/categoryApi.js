import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/ecommerce/categories",
  }),
  tagTypes: ["Category"],

  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        method: "GET",
      }),
      providesTags: ["Category"],
    }),
    addCategories: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useAddCategoriesMutation
} = categoryApi;
