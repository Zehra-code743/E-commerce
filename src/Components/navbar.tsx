"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon
import { HiMenu } from "react-icons/hi"; // Import the hamburger menu icon
import { HiX } from "react-icons/hi"; // Import the close icon

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
      {/* Left Menu */}
      <div className="flex space-x-6 sm:hidden md:flex">
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
      <div className="text-lg font-bold text-black hidden sm:block md:hidden lg:block xl:block">
        DAWNBIRD.
      </div>

      {/* Right Menu */}
      <div className="flex items-center space-x-6 sm:hidden md:flex">
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
            {/* Badge for cart count */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              3
            </span>
          </span>
        </Link>
      </div>

      {/* Hamburger Menu (Mobile Screens) */}
      <div className="sm:flex md:hidden lg:hidden xl:hidden">
        <button onClick={toggleMobileMenu} className="text-xl text-black focus:outline-none">
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu (for smaller screens) */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white p-4 space-y-4 sm:hidden md:flex">
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
          {/* Cart Icon */}
          <Link href="/Cart">
            <span className="relative">
              <FaShoppingCart className="text-xl text-black hover:text-gray-600" />
              {/* Badge for cart count */}
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                3
              </span>
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
