import React from "react";
import StarRatings from "react-star-ratings";
import Button from "../common/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

function ProductDetail() {
  return (
    <div className="mx-16">
      {/* <div className="mt-10 flex flex-col gap-5 p-3 md:flex-row">
        <h2 className="md:hidden text-3xl font-semiboldbold text-center mb-5 ">
          Deals of the Month
        </h2>
        <div className="w-full md:w-[750px]">
          <img src="https://placehold.co/400" alt="" className="" />
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
          <div className="flex gap-3 m-auto md:m-0 w-fit pb-3">
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
      </div> */}
    </div>
    // <div className=" px-5 md:flex  justify-between gap-10 lg:flex md:px-36 flex-wrap text-primary">
    //   <div className="w-full md:w-2/5 max-w-[400px] m-auto">
    //     <img src="https://placehold.co/400" alt="" className="m-auto " />
    //     <div className="hidden sm:flex justify-between mt-10">
    //       <img src="https://placehold.co/400" alt="" className="w-1/5" />
    //       <img src="https://placehold.co/400" alt="" className="w-1/5" />
    //       <img src="https://placehold.co/400" alt="" className="w-1/5" />
    //       <img src="https://placehold.co/400" alt="" className="w-1/5" />
    //     </div>
    //   </div>
    //   <div className="w-full md:w-3/5 pt-5 text-base ">
    //     <h1 className="text-2xl font-semibold">Nike Phantom GX 2 Elite LV8 </h1>
    //     <h3 className="">FG Low-Top Football Boot</h3>
    //     <p className="text-secondary-text my-2 ">
    //       <StarRatings
    //         rating={4.5}
    //         starRatedColor="orange"
    //         numberOfStars={5}
    //         name="rating"
    //         starDimension="17px"
    //         starSpacing="2px"
    //       />
    //     </p>
    //     <div className="flex items-center mt-1">
    //       <span className=" font-semibold">38.00</span>
    //       <s className="text-light-grey ml-2">38.00</s>
    //     </div>
    //     <p className="mt-2">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
    //       repellendus unde enim obcaecati ipsum ipsam aspernatur. Dolor animi,
    //       voluptate ea eligendi libero, pariatur veritatis impedit beatae error,
    //       placeat qui dignissimos.
    //     </p>

    //     <div>
    //       <p className="py-3 text-lg">Color</p>
    //       <div className="flex gap-2 justify-start flex-1">
    //         <div className="bg-red-500 flex gap-2 p-3 rounded-md  border-primary"></div>
    //         <div className="bg-green-500 flex gap-2 p-3 rounded-md  border-primary"></div>
    //         <div className="bg-sky-500 flex gap-2 p-3 rounded-md  border-primary"></div>
    //       </div>
    //     </div>

    //     <ul className="flex flex-col gap-3 mt-5">
    //       <li>
    //         Offer on 4GB+128GB: Enjoy $5 Coupon | $5 Bank Offer
    //         <span className="text-primary"> Learn More</span>
    //       </li>
    //       <li>
    //         Offer On 6GB+128GB: Enjoy $10 Off{" "}
    //         <span className="text-primary"> Learn More</span>
    //       </li>
    //       <li>
    //         Save 18%: Get GST Invoice an save 18% on business purchase
    //         <span className="text-primary"> Learn More</span>
    //       </li>
    //       <li>
    //         MobiKwik offer: Get Upto $5 cashback
    //         <span className="text-primary"> Learn More</span>
    //       </li>
    //     </ul>

    //     <div className="flex gap-5 my-5">
    //       {/* <Button text="Add to cart" className="border-0" />
    //         <Button text="Buy now" className="border-0" /> */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductDetail;
