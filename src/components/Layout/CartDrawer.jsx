import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";

function CartDrawer({toggleCartDrawer,cartDrawer}) {
  return (
    <div
      className={`fixed top-0 right-0 sm:w-1/2 md:w-2/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        cartDrawer ? "translate-x-0" : "translate-x-full"
      }`}
    >
        <div className="flex justify-end p-4 ">
            <button onClick={toggleCartDrawer}>
                <IoMdClose className="h-6 w-6 text-gray-600"/>
            </button>
        </div>
      {/* CartDrawer contenet */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {/* componenet for card content */}
        <CartContent/>
      </div>
      <div className="bg-white sticky p-4 bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">Checkout</button>
        <p className="text-sm tracking-tighter text-gray-600 text-center mt-2">Shiping, Taxes and discount code at calculated at checkout</p>
      </div>
    </div>
  );
}

export default CartDrawer;
