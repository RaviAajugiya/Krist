import React, { useEffect, useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import {
  useAddToCartMutation,
  useDeleteCartItemMutation,
} from "../../redux/api/cartApi";

function CartItemCard({ name, img, price, quantity, id }) {
  const [count, setCount] = useState(quantity);
  const [addToCart] = useAddToCartMutation();

  useEffect(() => {
    console.log(id);
    addToCart({ id, count })
  }, [count]);

  const [deleteCartItem] = useDeleteCartItemMutation();

  return (
    <div className="sm:hidden border-2 p-3 my-3">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <img src={img} alt="" className="inline-block size-20" />
          <div>
            <p className="text-primary font-semibold text-lg">{name}</p>
            <p className="text-primary">Size: Regular</p>
            <p className="text-primary font-semibold">${price}</p>
          </div>
        </div>
        <IoCloseSharp
          className="scale-125"
          onClick={() => {
            deleteCartItem(id);
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex mt-2 items-center border border-primary-color w-fit rounded-md">
          <span
            className="py-1 px-2 text-primary cursor-pointer"
            onClick={() => setCount((prev) => prev + 1)}>
            <IoMdAdd />
          </span>
          <span className="py-1 px-1 -border">{count}</span>
          <span
            className="py-1 px-2 text-primary cursor-pointer"
            onClick={() => setCount((prev) => Math.max(prev - 1, 1))}>
            <IoMdRemove />
          </span>
        </div>
        <span className=" text-lg font-semibold">Total : ${count * price}</span>
      </div>
    </div>
  );
}

export default CartItemCard;
