import React from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";

function ProductQuantity({ setQuantity, quantity, className, isCart }) {
  return (
    <div className={`flex items-center border border-primary-color w-fit rounded-md ${className}`}>
      <span
        className="py-1 px-2"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        <IoMdAdd />
      </span>
      <span className="py-1 px-3 border-x border-primary-border">
        {quantity}
      </span>
      <span
        className="py-1 px-2"
        onClick={() => setQuantity((prev) => prev - 1)}
      >
        <IoMdRemove />
      </span>
    </div>
  );
}

export default ProductQuantity;
