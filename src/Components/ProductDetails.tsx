"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { CiHeart } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface IProducts {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
}

const ProductDetails = ({ productId }: { productId: string }) => {
  const [result, setResult] = useState<IProducts | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<string>("blue");
  const [cart, setCart] = useState<any[]>([]);

  const colors = [
    { name: "blue", class: "bg-blue-500", hex: "#3b82f6" },
    { name: "green", class: "bg-green-500", hex: "#22c55e" },
    { name: "orange", class: "bg-orange-500", hex: "#f97316" },
    { name: "dark", class: "bg-gray-800", hex: "#1f2937" },
  ];

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const product = await client.fetch(
          `*[_type == "product" && slug.current == $slug][0]{
            _id,
            name,
            price,
            "imageUrl": image.asset->url,
            description,
            "slug": slug.current
          }`,
          { slug: productId }
        );
        setResult(product || null);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const isProductInCart = () => {
    return cart.some((item) => item.id === result?.id && item.color === selectedColor);
  };

  const handleCartToggle = () => {
    if (result) {
      if (isProductInCart()) {
        // Remove from cart
        setCart((prevCart) =>
          prevCart.filter((item) => !(item.id === result.id && item.color === selectedColor))
        );
        alert(`${result.name} (Color: ${selectedColor}) has been removed from the cart!`);
      } else {
        // Add to cart
        const newItem = {
          id: result.id,
          name: result.name,
          price: result.price,
          color: selectedColor,
          imageUrl: result.imageUrl,
        };
        setCart((prevCart) => [...prevCart, newItem]);
        alert(`${result.name} (Color: ${selectedColor}) has been added to the cart!`);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          aria-label="Loading..."
        ></div>
      </div>
    );
  }

  if (!result) {
    return (
      <p
        className={`${montserrat.className} text-center text-3xl font-semibold text-gray-800`}
      >
        Product not found
      </p>
    );
  }

  return (
    <div className="p-8 hover:shadow-lg transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {/* Product Image Section */}
        <div
          className={`relative flex flex-col items-center space-y-4 p-4 border-4 rounded-lg ${
            colors.find((color) => color.name === selectedColor)?.class || "border-gray-300"
          }`}
          style={{
            backgroundColor: colors.find((color) => color.name === selectedColor)?.hex || "#ffffff",
          }}
        >
          <Image
            src={result.imageUrl}
            alt={`Image of ${result.name}`}
            className="w-full h-auto lg:w-[450px] lg:h-[500px] object-contain rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            width={506}
            height={450}
            priority
          />
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <h1
            className={`${montserrat.className} text-3xl font-semibold text-gray-800`}
          >
            {result.name}
          </h1>
          <h2
            className={`${montserrat.className} text-lg font-medium text-gray-600`}
          >
            {result.description}
          </h2>

          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
            <FaStar className="text-gray-300" />
            <span className="text-gray-500">(10 Reviews)</span>
          </div>

          <div className="flex space-x-4">
            <span className="text-xl font-bold text-green-600">
              ${result.price}
            </span>
          </div>

          <p className="text-gray-500 pr-20">{result.description}</p>

          {/* Color Options */}
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-600">Select Color:</span>
            {colors.map((color) => (
              <button
                key={color.name}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color.name ? "border-black" : "border-gray-300"
                } ${color.class}`}
                onClick={() => setSelectedColor(color.name)}
              ></button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={handleCartToggle}
              className={`w-full sm:w-auto px-6 py-3 ${
                isProductInCart() ? "bg-red-400" : "bg-blue-400"
              } text-black rounded hover:opacity-80 transition`}
            >
              {isProductInCart() ? "Remove from Cart" : "Add to Cart"}
            </button>

            <button className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200">
              <CiHeart className="text-gray-600" />
            </button>

            <button className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200">
              <IoCartOutline className="text-gray-600" />
            </button>

            <button className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200">
              <FaEye className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
