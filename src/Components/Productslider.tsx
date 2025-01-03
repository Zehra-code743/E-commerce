'use client';

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const ProductSlider = () => {
  const [cart, setCart] = useState<any[]>([]); // Local cart state

  const products = [
    { id: 1, name: "Glacierwind Caps", price: "$70", image: "/Product6.png", description: "A warm and cozy cap for the winter season." },
    { id: 2, name: "Olympian Parkas", price: "$150", image: "/image2.png", description: "A stylish winter parka to keep you warm." },
    { id: 3, name: "Frostguard Jackets", price: "$200", image: "/image3.png", description: "A high-quality jacket for extreme cold." },
    { id: 4, name: "Stormvision Hats", price: "$90", image: "/image4.png", description: "A perfect hat for stormy weather." },
    { id: 5, name: "Blizzardwave Wraps", price: "$120", image: "/image5.png", description: "A cozy wrap for the cold winter days." },
    { id: 6, name: "Gloves", price: "$120", image: "/image6.png", description: "Warm and soft gloves for winter activities." },
  ];

  // Handle adding item to cart
  const handleAddToCart = (product: any) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Handle removing item from cart
  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex-shrink-0 w-44 sm:w-56 md:w-64 lg:w-72 xl:w-80 flex flex-col items-center text-center"
          >
            <div className="block group cursor-pointer">
              <img
                src={product.image}
                alt={`Image of ${product.name}`}
                className="w-48 h-48 object-cover rounded-lg group-hover:opacity-90"
              />
              <h3 className="mt-4 text-lg font-semibold group-hover:text-blue-500">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)} // Add to cart on click
                className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
              >
                <FaShoppingCart /> {/* Cart icon */}
                <span>Add to Cart</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-12 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-5 text-gray-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <span className="text-gray-700">{item.name}</span>
                <span className="text-gray-600">
                  {item.quantity} x ${item.price.replace('$', '')}
                </span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Price</span>
                <span className="font-semibold">
                  ${cart.reduce((total, item) => total + parseInt(item.price.replace('$', '')) * item.quantity, 0)}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
