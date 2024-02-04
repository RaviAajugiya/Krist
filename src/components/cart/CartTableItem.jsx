import React, { useEffect, useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  useAddToCartMutation,
  useDeleteCartItemMutation,
} from "../../redux/api/cartApi";
import { useNavigate } from "react-router-dom";
import { URL } from "../config/URLHelper";
import ProductQuantity from "../common/ProductQuantity";

function CartTableItem({ name, img, price, itemCount, id }) {
  const [count, setCount] = useState(itemCount);
  const [addToCart] = useAddToCartMutation();
  const navigate = useNavigate();
  const [deleteCartItem] = useDeleteCartItemMutation();

  return (
    <>
      <tr className="border-t">
        <td className="py-2">
          <img src={img} alt="" className="size-20" />
        </td>
        <td>
          <p className="text-primary font-semibold text-lg cursor-pointer" onClick={() => {
            navigate(`${URL.PRODUCTDETAIL}/${id}`);
          }}>{name}</p>
          <p className="text-primary">Size: Regular</p>
        </td>
        <td className="">${price}</td>
        <td className="">
        <ProductQuantity
          className="w-20"
          quantity={count}
          setQuantity={setCount}
          isCartCounter="true"
          id={id}
        />
        </td>
        <td className="py-2 px-4 font-semibold">${count * price}</td>
        <td className="py-2 px-4">
          <RiDeleteBin6Line
            className="scale-125 text-red-500"
            onClick={() => {
              deleteCartItem(id);
            }}
          />
        </td>
      </tr>
    </>
  );
}

export default CartTableItem;
