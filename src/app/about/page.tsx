"use client";

import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center bg-gray-100">
        <div className="w-full md:w-1/2">
          <img
            src="/About1.png"
            alt="Puffer Jackets"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            WINTER’S BOLDEST STATEMENT
          </h1>
          <p className="text-lg text-gray-600">
            Embrace the cold in vibrant, modern style—puffer jackets that stand
            out.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-gray-600 italic">
              "The fit is just right—not too tight, not too loose—and the
              material is super soft. It's one of those shirts that you'll reach
              for again and again."
            </p>
            <p className="mt-4 font-bold">Forbes</p>
          </div>
          <div>
            <p className="text-gray-600 italic">
              "The fabric is so soft and flows beautifully, and the fit is
              perfect. It’s versatile enough to dress up or down, making it a
              staple in my wardrobe."
            </p>
            <p className="mt-4 font-bold">The Los Angeles Post</p>
          </div>
          <div>
            <p className="text-gray-600 italic">
              "These jeans are my new go-to! They hug in all the right places
              and have just the right amount of stretch. I love the high
              waist—it’s super flattering."
            </p>
            <p className="mt-4 font-bold">Alive</p>
          </div>
        </div>
      </div>

      {/* Featured Product Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Details */}
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">CHILL REBEL</h2>
            <p className="text-gray-600 mb-6">
              Defy the chill with a jacket as fierce as your style. Windproof,
              waterproof, and designed to keep you cozy in the coldest winds.
            </p>
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Lightweight</span>
                <span className="text-sm text-gray-600">90%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-red-500 h-2 rounded" style={{ width: "90%" }}></div>
              </div>

              <div className="flex justify-between my-4">
                <span className="text-sm text-gray-600">Waterproof</span>
                <span className="text-sm text-gray-600">80%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-blue-500 h-2 rounded" style={{ width: "80%" }}></div>
              </div>

              <div className="flex justify-between my-4">
                <span className="text-sm text-gray-600">Thermal Insulation</span>
                <span className="text-sm text-gray-600">95%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-green-500 h-2 rounded" style={{ width: "95%" }}></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Chill Rebel Puffer Jacket</h3>
            <p className="text-gray-600 mb-4">$120</p>
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>

          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src="/About3.png"
              alt="Chill Rebel Puffer Jacket"
              className="w-full sm:w-96 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
