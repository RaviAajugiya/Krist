import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/users/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice.userData?.data?.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["authApi"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
    userLogout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useUserLogoutMutation } =
  authApi;
