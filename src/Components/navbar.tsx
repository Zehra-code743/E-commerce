import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
      {/* Left Menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="/Men">
          <span className="text-sm font-medium text-black hover:text-blue-400">MEN</span>
        </Link>
        <Link href="/Women">
          <span className="text-sm font-medium text-black hover:text-blue-400">WOMEN</span>
        </Link>
        <Link href="/Accessories">
          <span className="text-sm font-medium text-black hover:text-blue-400">ACCESSORIES</span>
        </Link>
      </div>

      {/* Logo */}
      <div className="text-lg font-bold text-black flex justify-center md:block">
        DAWNBIRD.
      </div>

      {/* Right Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/about">
          <span className="text-sm font-medium text-black hover:text-blue-400">ABOUT</span>
        </Link>
        <Link href="/Contact">
          <span className="text-sm font-medium text-black hover:text-blue-400">CONTACT</span>
        </Link>
        {/* Cart Icon */}
        <Link href="/Cart">
          <span className="relative">
            <FaShoppingCart className="text-xl text-black hover:text-gray-600" />
            {/* Badge for cart count (optional, replace with dynamic count later) */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              3
            </span>
          </span>
        </Link>
      </div>

      {/* Mobile Menu (for smaller screens) */}
      <div className="md:hidden flex items-center space-x-4">
        {/* Hamburger Icon (to toggle menu) */}
        <div className="relative">
          <button className="text-xl text-black hover:text-gray-600">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (hidden initially, can be shown on toggle) */}
      <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 z-10">
        <div className="flex flex-col space-y-4 py-4 px-6">
          <Link href="/Men">
            <span className="text-sm font-medium text-black hover:text-blue-400">MEN</span>
          </Link>
          <Link href="/Women">
            <span className="text-sm font-medium text-black hover:text-blue-400">WOMEN</span>
          </Link>
          <Link href="/Accessories">
            <span className="text-sm font-medium text-black hover:text-blue-400">ACCESSORIES</span>
          </Link>
          <Link href="/about">
            <span className="text-sm font-medium text-black hover:text-blue-400">ABOUT</span>
          </Link>
          <Link href="/Contact">
            <span className="text-sm font-medium text-black hover:text-blue-400">CONTACT</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
