import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { URL } from "../config/URLHelper";
import Banner from "./Banner";
import Product from "./Product";
import Deal from "./../../assets/output_image.png";
import Button from "../common/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
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
      <div className="px-2 lg:px-32">
        <h2 className="mt-16 text-center text-4xl font-semibold mb-8">
          Our Bestseller
        </h2>
        <div className="flex flex-wrap">
          <Product />
          <Product />
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
