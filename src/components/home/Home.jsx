import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { URL } from "../config/URLHelper";
import Banner from "./Banner";
import Product from "./Product";

function Home() {
  const navigate = useNavigate();
  const user = localStorage.getItem("email");
  const dispatch = useDispatch();
  if (user) {
    dispatch(login({ email: user }));
    console.log(user);
  } else {
    navigate(URL.AUTH);
  }

  return (
    <div className="h-[calc(100vh - 0.5rem)] ">
      <Banner />
      <div className="px-2 ">
        <h2 className="mt-16 text-center text-4xl font-semibold ">
          Our Bestseller
        </h2>
        <div className="flex gap-6 flex-wrap">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
