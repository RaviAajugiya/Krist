import React from "react";
import CartTable from "./CartTable";
import { useFormik } from "formik";
import DynamicForm from "../form/DynamicForm";
import Button from "../common/Button";
import CartIteamCard from "./CartIteamCard";

function Cart() {
  return (
    <div className="max-w-[1300px] px-5 m-auto">
      <h2 className="text-3xl font-semibold pt-5">Checkout</h2>
      <div className="flex gap-10 flex-wrap">
        <div className="flex-grow  w-full sm:w-8/12 mt-7 ">
          <CartTable />
          <CartIteamCard/>
          <CartIteamCard/>
          <CartIteamCard/>
          <CartIteamCard/>
          <CartIteamCard/>
        </div>
        <div className="flex-grow flex flex-wrap gap-4 md:gap-10 ">
          <div className="flex-grow p-5 border-2 h-fit max-w-[550px] mx-auto">
            <div className="text-lg pb-4 border-b flex justify-between font-bold">
              <span>Subtotal</span>
              <span>$200.00</span>
            </div>
            <div className="py-3">
              <label htmlFor="" className="block mb-1">
                Enter Discount Code
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="p-3 flex-grow rounded-l-lg border-r-0 border border-primary-color focus:outline-none"
                  placeholder="Discount Code"
                />
                <Button className="border-l-0 rounded-l-none">Apply</Button>
              </div>
            </div>
            <p className="flex justify-between text-lg py-2 border-b">
              <span>Delivery Charge</span>
              <span>$50.0</span>
            </p>
            <p className="flex justify-between py-3 text-xl font-semibold">
              <span>Grand Total</span>
              <span>$50.0</span>
            </p>
            <Button className="w-full mt-3">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
