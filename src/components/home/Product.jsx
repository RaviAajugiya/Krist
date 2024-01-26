import React from "react";

function Product() {
  return (
    <div className="w-full sm:w-1/2 m-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://dummyimage.com/200x300/c9c9c9/fff.png"
          alt=""
          className="w-full object-cover h-"
        />
        <div className="">
          <p className="font-semibold text-xl">Roadstar</p>
          <p>Printed Cotton T-Shirt</p>
          <div className="flex items-center mt-2">
            <span className="text-green-600 font-semibold">38.00</span>
            <s className="text-gray-400 ml-2">38.00</s>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
