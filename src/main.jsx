import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/common/Layout";
import Login from "./components/login/Login";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/home/Home";
import { URL } from "./components/config/URLHelper.js";
import ProductListing from "./components/productListing/ProductListing.jsx";
import ProductDetail from "./components/productDetail/productDetail.jsx";
import Cart from "./components/cart/Cart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={URL.HOME} element={<Layout />}>
      <Route path={URL.HOME} element={<Home />} />
      <Route path={URL.AUTH} element={<Login />} />
      <Route path={URL.PRODUCT} element={<ProductListing />} />
      <Route path={URL.PRODUCTDETAIL} element={<ProductDetail />} />
      <Route path={URL.CART} element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
