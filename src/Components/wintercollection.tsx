'use client';

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const WinterCollection = () => {
  const [cart, setCart] = useState<any[]>([]); // Local cart state

  const items = [
    { id: 1, name: "HATS", image: "/Product1.png", price: "$70" },
    { id: 2, name: "PARKAS", image: "/Product2.png", price: "$150" },
    { id: 3, name: "JACKETS", image: "/product3.png", price: "$200" },
    { id: 4, name: "GLOVES", image: "/Product4.png", price: "$120" },
    { id: 5, name: "WRAPS", image: "/Product5.png", price: "$90" },
    { id: 6, name: "SunGlass", image: "/Product6.png", price: "$50" },
  ];

  // Handle adding item to cart
  const handleAddToCart = (item: any) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((product) => product.id === item.id);
      if (existingProduct) {
        return prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: (product.quantity || 1) + 1 }
            : product
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Handle removing item from cart
  const handleRemoveFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== itemId));
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      {/* Display Winter Collection Items */}
      <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-4 bg-gray-50 w-28 sm:w-32 md:w-36 lg:w-40"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-24 object-contain"
            />
            <h3 className="text-sm font-semibold text-gray-700">{item.name}</h3>
            <p className="text-gray-500">{item.price}</p>
            <button
              onClick={() => handleAddToCart(item)} // Add to cart on click
              className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
            >
              <FaShoppingCart /> {/* Cart icon */}
              <span>Add to Cart</span>
            </button>
          </div>
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

export default WinterCollection;
