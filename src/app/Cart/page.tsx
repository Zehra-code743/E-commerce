"use client";

import { useState } from "react";
import { useCart } from "../context/page";
import Image from "next/image";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const confirmPurchase = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Your Cart</h1>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow mb-4"
              >
                <Image src={item.imageUrl} alt={item.name} width={50} height={50} />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">Color: {item.color}</p>
                  <p className="text-lg font-bold">${item.price * item.quantity}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}

        {cart.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Total: ${getTotal()}</h2>
            <button
              onClick={() => setCheckout(true)}
              className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}

        {checkout && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Confirm Your Order</h2>
            <button
              onClick={confirmPurchase}
              className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
            >
              Confirm Purchase
            </button>
          </div>
        )}

        {orderSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-green-600">🎉 Order Dispatched Successfully! 🚚</h2>
              <p className="mt-2 text-gray-700">Your order is on its way.</p>
              <button
                onClick={() => setOrderSuccess(false)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
