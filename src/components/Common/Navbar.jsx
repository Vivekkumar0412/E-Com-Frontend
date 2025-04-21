import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";
function Navbar() {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [navBarDrawer, setNavBarDrawer] = useState(false);
  function toggleCartDrawer() {
    setCartDrawer(!cartDrawer);
  }
  function toggleNavBarFunction() {
    setNavBarDrawer(!navBarDrawer);
  }

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Vivek
          </Link>
        </div>
        {/* center navigation links */}

        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-meduim uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-meduim uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-meduim uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-meduim uppercase"
          >
            Bottom Wear
          </Link>
        </div>
        {/* right */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="bg-vivek-red text-white absolute -top-1 text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>
          {/* search button componenet */}
          <button onClick={toggleNavBarFunction} className="md:hidden ">
            <HiBars3BottomRight className="h-6 w-6 " />
          </button>
          <div className="overflow-hidden">
            <SearchBar />
          </div>
        </div>
      </nav>
      <CartDrawer cartDrawer={cartDrawer} toggleCartDrawer={toggleCartDrawer} />
      {/* mobile navigation component */}
      <div
        className={`fixed left-0 top-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navBarDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
            <button onClick={toggleNavBarFunction}>
                <IoMdClose className="h-6 w-6 text-gray-600"/>
            </button>
        </div>
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <nav className="space-y-4">
                <Link to="#" onClick={toggleNavBarFunction} className="block text-gray-600 hover:text-black">Men</Link>
                <Link to="#" onClick={toggleNavBarFunction} className="block text-gray-600 hover:text-black">Women</Link>
                <Link to="#" onClick={toggleNavBarFunction} className="block text-gray-600 hover:text-black">Top Wear</Link>
                <Link to="#" onClick={toggleNavBarFunction} className="block text-gray-600 hover:text-black">Bottom Wear</Link>
            </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
