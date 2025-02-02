'use client';

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const WinterCollection = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  const items = [
    { id: 1, name: "HATS", image: "/Product1.png", price: "$70" },
    { id: 2, name: "PARKAS", image: "/Product2.png", price: "$150" },
    { id: 3, name: "JACKETS", image: "/product3.png", price: "$200" },
    { id: 4, name: "GLOVES", image: "/Product4.png", price: "$120" },
    { id: 5, name: "WRAPS", image: "/Product5.png", price: "$90" },
    { id: 6, name: "SunGlass", image: "/Product6.png", price: "$50" },
  ];

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

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== itemId));
  };

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('🎉 Order Placed Successfully Thank you For Shopping  ');
    setCart([]);
    setIsCheckout(false);
    setFormData({ name: '', email: '', address: '' });
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center space-y-3 border border-gray-200 rounded-xl p-5 bg-white shadow-lg w-36 sm:w-40 md:w-44 lg:w-48 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img src={item.image} alt={item.name} className="h-28 w-28 object-contain rounded-lg" />
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600 font-medium">{item.price}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 shadow-md"
            >
              <FaShoppingCart /> <span>Add to Cart</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-white shadow-2xl rounded-xl max-w-md mx-auto border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Cart Summary</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-4 shadow-sm">
                <span className="text-gray-800 font-medium">{item.name}</span>
                <span className="text-gray-700 font-semibold">{item.quantity} x ${item.price.replace('$', '')}</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  ✕
                </button>
              </div>
            ))}
            <div className="mt-6 border-t pt-4 flex justify-between items-center text-lg font-semibold">
              <span>Total Price</span>
              <span>${cart.reduce((total, item) => total + parseInt(item.price.replace('$', '')) * item.quantity, 0)}</span>
            </div>
            <button onClick={handleCheckout} className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md">Checkout</button>
          </div>
        ) : (
          <p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
        )}
      </div>

      {isCheckout && (
        <div className="mt-12 p-6 bg-white shadow-2xl rounded-xl max-w-md mx-auto border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Checkout</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Full Name" required className="w-full p-3 border rounded-lg" />
            <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Email" required className="w-full p-3 border rounded-lg" />
            <input type="text" name="address" value={formData.address} onChange={handleFormChange} placeholder="Shipping Address" required className="w-full p-3 border rounded-lg" />
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">Place Order</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WinterCollection;
