import React from "react";
import BannerImg from "./../../assets/Banner.jpg";
import Button from "./../common/Button.jsx";
import { IoIosArrowRoundForward } from "react-icons/io";

function Banner() {
  return (
    <div
      className="h-80 md:h-[calc(100vh-5rem)] bg-cover bg-center sm:bg-right-top"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className="flex flex-col h-full max-w-[1300px] m-auto pl-5 gap-3 justify-center ">
        <p className="text-xl font-semibold md:text-2xl">Classic Exclusive</p>
        <h2 className="text-2xl font-bold md:text-4xl">Premium Collection</h2>
        <p className="text-xl md:text-2xl">UPTO 40% OFF</p>
        <Button className="px-3 py-4 mt-4 w-fit flex gap-3 items-center">
          Shop Now
          <IoIosArrowRoundForward className="size-6" />
        </Button>
      </div>
    </div>
  );
}

export default Banner;
