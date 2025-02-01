// "use client"
// import React, { useState } from "react";
// import Link from "next/link";
// import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon
// import { HiMenu } from "react-icons/hi"; // Import the hamburger menu icon
// import { HiX } from "react-icons/hi"; // Import the close icon

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   return (
//     <nav className="flex flex-row justify-between items-center py-4 px-6 border-b border-gray-200">
//       {/* Left Menu */}
//       <div className="flex space-x-6 sm:hidden md:flex">
//         <Link href="/Men">
//           <span className="text-sm font-medium text-black hover:text-blue-400">MEN</span>
//         </Link>
//         <Link href="/Women">
//           <span className="text-sm font-medium text-black hover:text-blue-400">WOMEN</span>
//         </Link>
//         <Link href="/Accessories">
//           <span className="text-sm font-medium text-black hover:text-blue-400">ACCESSORIES</span>
//         </Link>
//       </div>

//       {/* Logo */}
//       <div className="text-lg font-bold text-black hidden sm:block md:hidden lg:block xl:block">
//         DAWNBIRD.
//       </div>

//       {/* Right Menu */}
//       <div className="flex items-center space-x-6 sm:hidden md:flex">
//         <Link href="/about">
//           <span className="text-sm font-medium text-black hover:text-blue-400">ABOUT</span>
//         </Link>
//         <Link href="/Contact">
//           <span className="text-sm font-medium text-black hover:text-blue-400">CONTACT</span>
//         </Link>
//         {/* Cart Icon */}
//         <Link href="/Cart">
//           <span className="relative">
//             <FaShoppingCart className="text-xl text-black hover:text-gray-600" />
//             {/* Badge for cart count */}
//             <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
//               3
//             </span>
//           </span>
//         </Link>
//       </div>

//       {/* Hamburger Menu (Mobile Screens) */}
//       <div className="sm:flex md:hidden lg:hidden xl:hidden">
//         <button onClick={toggleMobileMenu} className="text-xl text-black focus:outline-none">
//           {mobileMenuOpen ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu (for smaller screens) */}
//       {mobileMenuOpen && (
//         <div className="absolute top-0 left-0 w-full bg-white p-4 space-y-4 sm:hidden md:flex">
//           <Link href="/Men">
//             <span className="text-sm font-medium text-black hover:text-blue-400">MEN</span>
//           </Link>
//           <Link href="/Women">
//             <span className="text-sm font-medium text-black hover:text-blue-400">WOMEN</span>
//           </Link>
//           <Link href="/Accessories">
//             <span className="text-sm font-medium text-black hover:text-blue-400">ACCESSORIES</span>
//           </Link>
//           <Link href="/about">
//             <span className="text-sm font-medium text-black hover:text-blue-400">ABOUT</span>
//           </Link>
//           <Link href="/Contact">
//             <span className="text-sm font-medium text-black hover:text-blue-400">CONTACT</span>
//           </Link>
//           {/* Cart Icon */}
//           <Link href="/Cart">
//             <span className="relative">
//               <FaShoppingCart className="text-xl text-black hover:text-gray-600" />
//               {/* Badge for cart count */}
//               <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
//                 3
//               </span>
//             </span>
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






// get by gpt 

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { LuLogIn } from "react-icons/lu";
import { SignInButton, SignedOut } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">DAWNBIRD.</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link href="/Men" className="hover:text-blue-500 transition">MEN</Link>
        <Link href="/Women" className="hover:text-blue-500 transition">WOMEN</Link>
        <Link href="/Accessories" className="hover:text-blue-500 transition">ACCESSORIES</Link>
        <Link href="/about" className="hover:text-blue-500 transition">ABOUT</Link>
        <Link href="/Contact" className="hover:text-blue-500 transition">CONTACT</Link>
        <SignedOut>
          <SignInButton>
          <button>
        <LuLogIn />
        </button>
          </SignInButton>
          </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
        
      </div>

      {/* Cart & Mobile Menu Button */}
      <div className="flex items-center space-x-6">
        {/* Cart Icon */}
        <Link href="/Cart" className="relative">
          <FaShoppingCart className="text-2xl text-gray-800 hover:text-gray-600 transition" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-2xl text-gray-800 focus:outline-none">
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
          <Link href="/Men" className="text-gray-700 text-lg hover:text-blue-500 transition">MEN</Link>
          <Link href="/Women" className="text-gray-700 text-lg hover:text-blue-500 transition">WOMEN</Link>
          <Link href="/Accessories" className="text-gray-700 text-lg hover:text-blue-500 transition">ACCESSORIES</Link>
          <Link href="/about" className="text-gray-700 text-lg hover:text-blue-500 transition">ABOUT</Link>
          <Link href="/Contact" className="text-gray-700 text-lg hover:text-blue-500 transition">CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
