import React from "react";
import CartIteam from "./Cartiteam";

function Cart() {
  return (
    <div className="max-w-[1400px] px-5 m-auto">
      <h2 className="text-3xl mt-5">Checkout</h2>
      <div className='flex'>
        <div className="w-8/12">
            <CartIteam/>
            <CartIteam/>
            <CartIteam/>
        </div>
        <div className="w-4/12">Subtotal</div>
      </div>
    </div>
  );
}

export default Cart;
