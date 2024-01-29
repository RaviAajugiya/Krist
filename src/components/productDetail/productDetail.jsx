import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import Button from "../common/Button";
import { IoIosArrowRoundForward, IoMdAdd, IoMdRemove } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Product from "../home/Product";

function ProductDetail() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className=" px-5 md:flex justify-between gap-10 flex-wrap text-primary max-w-[1300px] m-auto">
        <div className="w-full lg:w-1/2 max-w-[400px] m-auto">
          <img src="https://placehold.co/400" alt="" className="m-auto " />
          <div className="hidden sm:flex justify-between mt-10">
            <img src="https://placehold.co/400" alt="" className="w-1/5" />
            <img src="https://placehold.co/400" alt="" className="w-1/5" />
            <img src="https://placehold.co/400" alt="" className="w-1/5" />
            <img src="https://placehold.co/400" alt="" className="w-1/5" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 pt-5 text-base ">
          <h1 className="text-2xl font-semibold">
            Nike Phantom GX 2 Elite LV8{" "}
          </h1>
          <h3 className="">FG Low-Top Football Boot</h3>
          <p className="text-secondary-text my-2 ">
            <StarRatings
              rating={4.5}
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
              starDimension="17px"
              starSpacing="2px"
            />
          </p>
          <div className="flex items-center mt-1">
            <span className=" font-semibold">38.00</span>
            <s className="text-light-grey ml-2">38.00</s>
          </div>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            repellendus unde enim obcaecati ipsum ipsam aspernatur. Dolor animi,
            voluptate ea eligendi libero, pariatur veritatis impedit beatae
            error, placeat qui dignissimos.
          </p>
          <div>
            <h3 className="py-3 text-lg font-semibold">Color</h3>
            <div className="flex gap-2 justify-start flex-1">
              <div className="bg-red-500 flex gap-2 p-[14px] rounded-[0.200em]  border-primary"></div>
              <div className="bg-green-500 flex gap-2 p-[14px] rounded-[0.200em]  border-primary"></div>
              <div className="bg-blue-500 flex gap-2 p-[14px] rounded-[0.200em]  border-primary"></div>
              <div className="bg-yellow-400 flex gap-2 p-[14px] rounded-[0.200em]  border-primary"></div>
              <div className="bg-orange-500 flex gap-2 p-[14px] rounded-[0.200em]  border-primary"></div>
            </div>
          </div>
          <div>
            <h3 className="py-3 text-lg font-semibold">Size</h3>
            <div className="flex gap-2 justify-start flex-1">
              <div className="bg-primary-color text-white p-1 w-9 text-center border border-primary-color rounded-[0.200em] border-primary">
                S
              </div>
              <div className="p-1 w-9 text-center border border-primary-color rounded-[0.200em]  border-primary">
                M
              </div>
              <div className="p-1 w-9 text-center border border-primary-color rounded-[0.200em]  border-primary">
                L
              </div>
              <div className="p-1 w-9 text-center border border-primary-color rounded-[0.200em]  border-primary">
                XL
              </div>
              <div className="p-1 w-9 text-center border border-primary-color rounded-[0.200em]  border-primary">
                XXL
              </div>
            </div>
          </div>

          {/* <ul className="flex flex-col gap-3 mt-5">
            <li>
              Offer on 4GB+128GB: Enjoy $5 Coupon | $5 Bank Offer
              <span className="text-primary"> Learn More</span>
            </li>
            <li>
              Offer On 6GB+128GB: Enjoy $10 Off{" "}
              <span className="text-primary"> Learn More</span>
            </li>
            <li>
              Save 18%: Get GST Invoice an save 18% on business purchase
              <span className="text-primary"> Learn More</span>
            </li>
            <li>
              MobiKwik offer: Get Upto $5 cashback
              <span className="text-primary"> Learn More</span>
            </li>
          </ul> */}

          <div className="flex gap-3 my-5">
            <div className="flex items-center border border-primary-color w-fit rounded-md">
            <span
              className="py-1 px-2"
              onClick={() => setCount((prev) => prev + 1)}
            >
              <IoMdAdd />
            </span>
            <span className="py-1 px-3 border-x border-primary-border">
              {count}
            </span>
            <span
              className="py-1 px-2"
              onClick={() => setCount((prev) => prev - 1)}
            >
              <IoMdRemove />
            </span>
          </div>
            <Button className="w-40 flex-grow">Add To Cart</Button>
            <Button className="bg-white-color text-primary-color border-primary-color border">
              <CiHeart className="text-primary-color size-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] m-auto">
        <h2 className="text-3xl mt-10 mb-5 font-semibold text-center">
          Releted Products
        </h2>
        <div className="flex flex-wrap mb-10">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
