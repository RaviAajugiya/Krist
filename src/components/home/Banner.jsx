import React from "react";
import BannerImg from "./../../assets/Banner.jpg";
import Button from './../common/Button.jsx';
import { IoIosArrowRoundForward } from "react-icons/io";

function Banner() {
  return (
    <div className="h-[calc(100vh-5rem)] bg-cover bg-center sm:bg-right-top" style={{backgroundImage: `url(${BannerImg})`}}>
      <div className="flex flex-col h-full pl-5 md:w-1/2 md:pl-36 gap-3 justify-center ">
        <p className="font-semibold text-2xl">Classic Exclusive</p>
        <h2 className="font-bold text-4xl">Premium Collection</h2>
        <p className="text-2xl">UPTO 40% OFF</p>
        <Button className='px-3 py-4 mt-4 w-fit flex gap-3 items-center'>
          Shop Now 
          <IoIosArrowRoundForward className="size-6"/>
        </Button>
      </div>
    </div>
  );
}

export default Banner;
