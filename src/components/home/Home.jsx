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
    <div className="h-[calc(100vh - 0.5rem)]">
      <Banner />
      <div className="max-w-[1400px] m-auto">
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
        <div className="mt-10 flex flex-col gap-5 p-3 px-5 md:flex-row-reverse">
          <h2 className="md:hidden text-3xl font-semiboldbold text-center mb-5 ">
            Deals of the Month
          </h2>
          <div className="w-full md:w-[750px]">
            <img src={Deal} alt="" className="" />
          </div>
          <div className="w-full space-y-3 md:w-3/5 flex flex-col justify-center">
            <h2 className="hidden md:block text-3xl font-semiboldbold text-center mb-5 md:text-left md:text-4xl">
              Deals of the Month
            </h2>
            <p className="md:text-left text-base text-justify pb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
              possimus recusandae, qui alias minima necessitatibus! Autem fuga
              minus amet ipsa at perspiciatis dolorum.
            </p>
            <div className="flex gap-3 m-auto md:m-0 w-fit pb-3 flex-wrap">
              <div className="border border-[#b9b9b9] rounded-lg px-4 py-1 ">
                <p className="text-center font-extrabold text-2xl">120</p>
                <p className="text-center">Days</p>
              </div>
              <div className="border border-[#b9b9b9] rounded-lg px-4 py-1 ">
                <p className="text-center font-extrabold text-2xl">18</p>
                <p className="text-center">Hours</p>
              </div>
              <div className="border border-[#b9b9b9] rounded-lg px-4 py-1 ">
                <p className="text-center font-extrabold text-2xl">15</p>
                <p className="text-center">MIns</p>
              </div>
              <div className="border border-[#b9b9b9] rounded-lg px-4 py-1 ">
                <p className="text-center font-extrabold text-2xl">10</p>
                <p className="text-center">Secs</p>
              </div>
            </div>
            <Button className="px-3 py-4 mt-4 m-auto md:m-0 w-fit flex gap-3 items-center">
              View All Products
              <IoIosArrowRoundForward className="size-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
