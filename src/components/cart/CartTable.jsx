import React, { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartTable() {
  const [count, setCount] = useState(1);

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
          <tr className="border-t">
            <td className="py-2">
              <img src="https://placehold.co/75" alt="" />
            </td>
            <td>
              <p className="text-primary font-semibold text-lg">Tailored Cotton Casual Shirt</p>
              <p className="text-primary">Size: Regular</p>
            </td>
            <td className="">$80.00</td>
            <td className="">
              <div className="flex items-center border border-primary-color w-fit rounded-lg">
                <span
                  className="py-1 px-2 text-primary cursor-pointer"
                  onClick={() => setCount((prev) => prev + 1)}>
                  <IoMdAdd />
                </span>
                <span className="py-1 px-3  -border">{count}</span>
                <span
                  className="py-1 px-2 text-primary cursor-pointer"
                  onClick={() => setCount((prev) => Math.max(prev - 1, 1))}>
                  <IoMdRemove />
                </span>
              </div>
            </td>
            <td className="py-2 px-4 font-semibold">$80.00</td>
            <td className="py-2 px-4">
              <RiDeleteBin6Line className="scale-125 text-red-500"/>
            </td>
          </tr>
          <tr className="border-t">
            <td className="py-2">
              <img src="https://placehold.co/75" alt="" />
            </td>
            <td>
              <p className="text-primary font-semibold text-lg">Tailored Cotton Casual Shirt</p>
              <p className="text-primary">Size: Regular</p>
            </td>
            <td className="">$80.00</td>
            <td className="">
              <div className="flex items-center border border-primary-color w-fit rounded-lg">
                <span
                  className="py-1 px-2 text-primary cursor-pointer"
                  onClick={() => setCount((prev) => prev + 1)}>
                  <IoMdAdd />
                </span>
                <span className="py-1 px-3  -border">{count}</span>
                <span
                  className="py-1 px-2 text-primary cursor-pointer"
                  onClick={() => setCount((prev) => Math.max(prev - 1, 1))}>
                  <IoMdRemove />
                </span>
              </div>
            </td>
            <td className="py-2 px-4 font-semibold">$80.00</td>
            <td className="py-2 px-4">
              <RiDeleteBin6Line className="scale-125 text-red-500"/>
            </td>
          </tr>
          <tr className="border-t">
            <td className="py-2">
              <img src="https://placehold.co/75" alt="" />
            </td>
            <td>
              <p className="text-primary font-semibold text-lg">Tailored Cotton Casual Shirt</p>
              <p className="text-primary">Size: Regular</p>
            </td>
            <td className="">$80.00</td>
            <td className="">
              <div className="flex items-center border border-primary-color w-fit rounded-lg">
                <span
                  className="py-1 px-2 text-primary cursor-pointer"
                  onClick={() => setCount((prev) => prev + 1)}>
                  <IoMdAdd />
                </span>
                <span className="py-1 px-3  -border">{count}</span>
                <span
                  className="py-1 px-2 text-primary cursor-pointer"
                  onClick={() => setCount((prev) => Math.max(prev - 1, 1))}>
                  <IoMdRemove />
                </span>
              </div>
            </td>
            <td className="py-2 px-4 font-semibold">$80.00</td>
            <td className="py-2 px-4">
              <RiDeleteBin6Line className="scale-125 text-red-500"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
