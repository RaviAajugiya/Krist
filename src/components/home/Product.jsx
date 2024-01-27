import React from "react";

function Product() {
  return (
    <div className="   m-auto p-2 sm:w-52 lg:w-60">
      <img
        src="https://dummyimage.com/200x300/c9c9c9/fff.png"
        alt=""
        className="w-full object-cover h-60 sm:h-64 lg:h-72"
      />
      <div className="mt-2 flex flex-col gap-1">
        <p className="font-semibold text-xl">Roadstar</p>
        <p>Printed Cotton T-Shirt</p>
        <div className="flex items-center mt-1">
          <span className=" font-semibold">38.00</span>
          <s className="text-light-grey ml-2">38.00</s>
        </div>
      </div>
    </div>
  );
}

export default Product;
