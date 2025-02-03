'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Men = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

 
  const products = [
    {
      id: '1',
      name: 'Classic Leather Jacket',
      image: '/Men1.png',
      price: 120,
      colors: ['black', 'brown', 'red'],
    },
    {
      id: '2',
      name: 'Winter Puffer Jacket',
      image: '/Men2.png',
      price: 150,
      colors: ['yellow', 'blue', 'white'],
    },
    {
      id: '3',
      name: 'Denim Jacket',
      image: '/Men3.png',
      price: 85,
      colors: ['blue', 'gray'],
    },
    {
      id: '4',
      name: 'Wool Overcoat',
      image: '/Men4.png',
      price: 200,
      colors: ['black', 'gray', 'navy'],
    },
    {
      id: '5',
      name: 'Leather Biker Jacket',
      image: '/Men5.png',
      price: 180,
      colors: ['black', 'red'],
    },
    {
      id: '6',
      name: 'Hooded Parka',
      image: '/Men6.png',
      price: 160,
      colors: ['olive', 'black'],
    },
    {
      id: '7',
      name: 'Suede Bomber Jacket',
      image: '/Men7.png',
      price: 140,
      colors: ['brown', 'tan'],
    },
    {
      id: '8',
      name: 'Sherpa Lined Jacket',
      image: '/Men8.png',
      price: 110,
      colors: ['gray', 'black'],
    },
  ];

  const handleAddToCart = (product: any) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Checkout Successful! Thank you for your purchase.');
    setCart([]);
    setShowCheckout(false);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Men's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition">
            <Image src={product.image} alt={product.name} width={500} height={400} className="h-60 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
              <p className="text-lg text-gray-600 mt-2">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center"
              >
                <FaShoppingCart /> <span className="ml-2">Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-5 text-gray-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <span className="text-gray-700">{item.name}</span>
                <span className="text-gray-600">{item.quantity} x ${item.price}</span>
                <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            ))}
            <button onClick={() => setShowCheckout(true)} className="w-full bg-green-600 text-white py-2 rounded-lg mt-4 hover:bg-green-700">
              Checkout
            </button>
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {showCheckout && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h2>
            <form onSubmit={handleCheckout}>
              <input type="text" placeholder="Full Name" required className="w-full p-2 border rounded mb-3" />
              <input type="email" placeholder="Email Address" required className="w-full p-2 border rounded mb-3" />
              <input type="text" placeholder="Shipping Address" required className="w-full p-2 border rounded mb-3" />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Confirm Order</button>
            </form>
            <button onClick={() => setShowCheckout(false)} className="w-full text-gray-600 mt-3">Cancel</button>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="fixed top-10 right-10 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg flex items-center">
          <AiOutlineCheckCircle className="mr-2" />
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Men;
