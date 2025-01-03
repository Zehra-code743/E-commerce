'use client';

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const Accessories = () => {
  const [cart, setCart] = useState<any[]>([]); // Local cart state

  const products = [
    {
      id: '1',
      name: 'Leather Gloves',
      image: '/Accessories1.png',
      price: 40,
      colors: ['gold', 'gray'],
    },
    {
      id: '2',
      name: 'Knitted Scarf',
      image: '/Accessories2.png',
      price: 25,
      colors: ['silver', 'lightpink'],
    },
    {
      id: '3',
      name: 'Wool Beanie',
      image: '/Accessories3.png',
      price: 20,
      colors: ['brown', 'white'],
    },
    {
      id: '4',
      name: 'Faux Fur Stole',
      image: '/Accessories4.png',
      price: 50,
      colors: ['gold', 'white'],
    },
    {
      id: '5',
      name: 'Stylish Belt',
      image: '/Accessories5.png',
      price: 35,
      colors: ['red', 'blue', 'gray'],
    },
    {
      id: '6',
      name: 'Silk Handkerchief',
      image: '/Accessories6.png',
      price: 15,
      colors: ['black', 'brown'],
    },
    {
      id: '7',
      name: 'Designer Sunglasses',
      image: '/Accessories7.png',
      price: 120,
      colors: ['black', 'tan'],
    },
    {
      id: '8',
      name: 'Pendant Necklace',
      image: '/Accessories8.png',
      price: 60,
      colors: ['golden', 'silver'],
    },
  ];

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

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-gray-800">Accessories Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-60 w-full object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
              <p className="text-lg text-gray-600 mt-2">${product.price}</p>
              <div className="flex space-x-3 mt-3">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="h-5 w-5 rounded-full border-2 border-gray-300 cursor-pointer"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
              <button
                onClick={() => handleAddToCart(product)} // Add to cart on click
                className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
              >
                <FaShoppingCart /> {/* Cart icon */}
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Display cart summary */}
      <div className="mt-12 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-5 text-gray-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <span className="text-gray-700">{item.name}</span>
                <span className="text-gray-600">
                  {item.quantity} x ${item.price}
                </span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)} // Remove item from cart
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
                  ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
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

export default Accessories;
