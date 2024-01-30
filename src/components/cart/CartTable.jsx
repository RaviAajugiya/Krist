import React, { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTableItem from "./CartTableItem";

function CartTable({ cartItems }) {
  console.log(cartItems);

  return (
    <div className="hidden sm:block w-full mb-10">
      <table className="w-full">
        <thead>
          <tr className="bg-primary text-left">
            <th className="pb-4">Products</th>
            <th className="pb-4">Price</th>
            <th className="pb-4">Quantity</th>
            <th className="pb-4">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((cartProduct) => (
            <CartTableItem
              key={cartProduct.product._id}
              name={cartProduct.product.name}
              img={cartProduct.product.mainImage.url}
              price={cartProduct.product.price}
              itemCount={cartProduct.quantity}
              id={cartProduct.product._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
