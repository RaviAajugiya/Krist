import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import productSlice from "./filterSlice";
import { authApi } from "./api/authApi";
import { productApi } from "./api/productApi";
import { cartApi } from "./api/cartApi";
import { categoryApi } from "./api/categoryApi";

export const store = configureStore({
  reducer: {
    authSlice,
    productSlice,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      productApi.middleware,
      cartApi.middleware,
      categoryApi.middleware,
    ]),
});
