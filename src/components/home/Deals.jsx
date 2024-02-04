import React from "react";
import DealImg from "./../../assets/output_image.png";
import Button from "../common/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

function Deals() {
  const DealTime = [
    { time: 120, label: "Days" },
    { time: 18, label: "Hours" },
    { time: 15, label: "Mins" },
    { time: 10, label: "Secs" },
  ];

  return (
    <div className="mt-10 flex flex-col gap-5 p-3 px-5 md:flex-row-reverse">
      <h2 className="md:hidden text-3xl font-semiboldbold text-center mb-5 ">
        Deals of the Month
      </h2>
      <div className="w-full md:w-[750px]">
        <img src={DealImg} alt="" className="" />
      </div>
      <div className="w-full space-y-3 md:w-3/5 flex flex-col justify-center">
        <h2 className="hidden md:block text-3xl font-semiboldbold text-center mb-5 md:text-left md:text-4xl">
          Deals of the Month
        </h2>
        <p className="md:text-left text-base text-justify pb-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex possimus
          recusandae, qui alias minima necessitatibus! Autem fuga minus amet
          ipsa at perspiciatis dolorum.
        </p>
        <div className="flex gap-3 m-auto md:m-0 w-fit pb-3 flex-wrap">
          {DealTime.map((deal) => (
            <div
              key={deal.label}
              className="border border-[#b9b9b9] rounded-lg px-4 py-1 "
            >
              <p className="text-center font-extrabold text-2xl">{deal.time}</p>
              <p className="text-center">{deal.label}</p>
            </div>
          ))}
        </div>
        <Button className="px-3 py-4 mt-4 m-auto md:m-0 w-fit flex gap-3 items-center">
          View All Products
          <IoIosArrowRoundForward className="size-6" />
        </Button>
      </div>
    </div>
  );
}

export default Deals;
