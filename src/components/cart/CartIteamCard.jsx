import React, { useEffect, useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import {
  useAddToCartMutation,
  useDeleteCartItemMutation,
} from "../../redux/api/cartApi";
import ProductQuantity from "../common/ProductQuantity";

function CartItemCard({ name, img, price, itemCount, id }) {
  const [count, setCount] = useState(itemCount);
  const [addToCart] = useAddToCartMutation();

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

      <div className="flex items-center justify-between mt-2">
        <ProductQuantity
          className="w-20"
          quantity={count}
          setQuantity={setCount}
          isCartCounter="true"
          id={id}
        />
        <span className=" text-lg font-semibold">Total : ${count * price}</span>
      </div>
    </div>
  );
}

export default CartItemCard;
