import React from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";
import { useAddToCartMutation } from "../../redux/api/cartApi";

function ProductQuantity({
  setQuantity,
  quantity,
  className,
  isCartCounter,
  id,
}) {
  console.log(isCartCounter);
  const [addToCart] = useAddToCartMutation();

  return (
    <div
      className={`flex items-center p-1  justify-between border border-primary-color  rounded-md ${className}`}>
      <span
        className="px-1"
        onClick={() => {
          setQuantity((prev) => prev + 1);
          isCartCounter ? addToCart({ id: id, quantity: quantity + 1 }) : null;
        }}>
        <IoMdAdd />
      </span>
      <span className="border-x px-2 border-primary-border">{quantity}</span>
      <span
        className="px-1"
        onClick={() => {
          setQuantity((prev) => Math.max(prev - 1, 1));
          isCartCounter ? addToCart({ id: id, quantity: quantity - 1 }) : null;
        }}>
        <IoMdRemove />
      </span>
    </div>
  );
}

export default ProductQuantity;
