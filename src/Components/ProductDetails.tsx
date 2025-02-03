


"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCart } from "@/app/context/page";

interface IProducts {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
  quantity: number;
}

const colors = ["blue", "red", "green", "yellow", "purple"]; // Available colors

const ProductDetails = ({ productId }: { productId: string }) => {
  const [result, setResult] = useState<IProducts | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const { cart, addToCart, removeFromCart } = useCart();

  // Wishlist state and functions
  const [wishlist, setWishlist] = useState<IProducts[]>([]);

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
    return cart.some((item: any) => item.id === result?.id && item.color === selectedColor);
  };

  const isProductInWishlist = () => {
    return wishlist.some((item) => item.id === result?.id);
  };

  const handleCartToggle = () => {
    if (result) {
        const newItem = {
          id: result.id,
          name: result.name,
          price: result.price,
          color: selectedColor,
          imageUrl: result.imageUrl,
        quantity:result.quantity,
      };
      isProductInCart() ? removeFromCart(result.id) : addToCart(newItem);
    }
  };

  const handleWishlistToggle = () => {
    if (result) {
      if (isProductInWishlist()) {
        setWishlist(wishlist.filter((item) => item.id !== result.id)); // Remove from wishlist
      } else {
        setWishlist([...wishlist, result]); // Add to wishlist
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!result) return <p>Product not found</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ backgroundColor: selectedColor }}>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800">{result.name}</h1>
        <Image src={result.imageUrl} alt={result.name} width={300} height={300} className="rounded-md mx-auto" />
        <p className="text-gray-600 mt-2">{result.description}</p>
        <p className="text-xl font-bold text-gray-900 mt-2">${result.price}</p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Select Color:</h3>
          <div className="flex space-x-2 mt-2">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-black scale-110" : "border-transparent"}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></button>
            ))}
          </div>
          </div>

            <button
              onClick={handleCartToggle}
          className={`w-full mt-4 py-2 rounded-md text-white font-semibold ${isProductInCart() ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              {isProductInCart() ? "Remove from Cart" : "Add to Cart"}
            </button>

        <button
          onClick={handleWishlistToggle}
          className={`w-full mt-4 py-2 rounded-md text-white font-semibold ${isProductInWishlist() ? "bg-gray-500 hover:bg-gray-600" : "bg-pink-500 hover:bg-pink-600"}`}
        >
          {isProductInWishlist() ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
      </div>

      {/* Wishlist Display */}
      {wishlist.length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold text-gray-800">Your Wishlist</h2>
          <div className="mt-4">
            {wishlist.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 mb-4">
                <Image src={item.imageUrl} alt={item.name} width={50} height={50} className="rounded-md" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
