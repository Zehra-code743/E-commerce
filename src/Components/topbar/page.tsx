import React from "react";
import Link from "next/link"; // Import Link from Next.js

const TopBar = () => {
  return (
    <div className="bg-[#1E2A47] text-gray-200 text-sm py-2 px-4 flex justify-center items-center">
      <div className="flex w-full max-w-screen-xl justify-center items-center text-center">
        {/* Left side: Winter message */}
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 xl:space-x-8">
          <span className="mr-2 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            ❄️
          </span>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Winter Collection - Cozy up with Free Shipping on Orders Over $50
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
