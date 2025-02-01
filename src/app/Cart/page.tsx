'use client'; // This tells Next.js to treat this file as a Client Component

import { Card } from '@/Components/ui/card';
import { error } from 'console';
import { useState } from 'react';
import { CartContext } from '@/context/CartContext';

const winterProducts = [
  {
    id: 1,
    name: 'Winter Jacket',
    size: 'L',
    price: 120,
    image: '/Cart1.png',
  },
  {
    id: 2,
    name: 'Woolen Scarf',
    size: 'One Size',
    price: 30,
    image: '/Cart2.png',
  },
  {
    id: 3,
    name: 'Snow Boots',
    size: 'M',
    price: 80,
    image: '/Cart3.png',
  },
];


export default function Cart() {
  const [cart, setCart] = useState(winterProducts); // Cart state
  const [mycart, setMycart] = useState("/ProductDetails");
  const [checkout, setCheckout] = useState(false); // Checkout state

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const newcart = (pro:any) => {
    const ourcart = cart.find((items) => items.id == pro.id ? pro.name : pro.price) ;

    switch (ourcart) {
      case setMycart(`${pro.name}:${pro.price} `):
        break;
      default: error("Error!!!")
        break;
    }
  }

  const addToCart = (product: any) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      alert(`${product.name} is already in your cart.`);
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const proceedToCheckout = () => {
    setCheckout(true); // Switch to checkout view
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {!checkout ? (
          <>

          <div className='grid grid-cols-6 text-4xl px-6 py-2 mx-2 justify-center rounded-md shadow-lg border-2 lg:text-3xl md:text-2xl sm:text-sm'>
            <Card>
               <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
               <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
               {cart.length > 0 ? (
                 <ul className="space-y-4">
                   {cart.map((item, index) => (
                     <li key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                       <div className="flex items-center space-x-4">
                         <Image src={item.imageUrl} alt={item.name} width={50} height={50} className="rounded" />
                         <div>
                           <p className="font-semibold">{item.name}</p>
                           <p className="text-sm text-gray-500">Color: {item.color}</p>
                           <p className="text-lg font-bold">${item.price}</p>
                         </div>
                       </div>
                       <button onClick={() => setCart(cart.filter((_, i) => i !== index))} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
                     </li>
                   ))}
                 </ul>
               ) : (
                 <p className="text-gray-500">Your cart is empty.</p>
               )}
             </div>
            </Card>
          </div>
            {/* Cart View */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center">Winter Collection</h1>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {/* Cart Items */}
              <div className="md:col-span-2 space-y-4">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-start gap-4 p-4 bg-white rounded-md shadow hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
                  >
                    <div className="w-24 h-24 bg-gray-100 p-2 rounded-md">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                      <p className="text-sm text-gray-500">Size: {product.size}</p>
                      <h4 className="text-lg font-bold text-gray-800 mt-auto">
                        ${product.price.toFixed(2)}
                      </h4>
                    </div>
                    <button
                      onClick={() => setCart(cart.filter((item) => item.id !== product.id))}
                      className="text-red-500 text-sm font-semibold hover:text-red-700 transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {cart.length === 0 && (
                  <p className="text-gray-500 text-center">Your cart is empty!</p>
                )}
              </div>

              {/* Order Summary */}
              <div className="bg-white p-4 rounded-md shadow h-max md:ml-8">
                <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
                <hr className="my-4" />
                <div className="text-sm text-gray-800 flex justify-between">
                  <span>Subtotal</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
                <hr className="my-4" />
                <button
                  onClick={proceedToCheckout}
                  className="w-full md:w-auto bg-blue-500 text-white py-2 rounded-md px-4 hover:bg-blue-600 transition duration-300"
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>

            {/* Add More Products */}
            <div className="mt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Add More Products</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
                {winterProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col items-center gap-4 p-4 bg-white rounded-md shadow hover:scale-105 hover:shadow-xl transition-transform duration-300"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-contain bg-gray-100 p-2 rounded-md"
                    />
                    <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500">Size: {product.size}</p>
                    <h4 className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</h4>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-md hover:bg-green-600 transition duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            {/* Checkout View */}
            <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
            <div className="mt-4 space-y-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-4 bg-white rounded-md shadow"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500">Size: {product.size}</p>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</h4>
                </div>
              ))}
              <h3 className="text-xl font-bold text-gray-800">
                Total: ${getTotal().toFixed(2)}
              </h3>
              <button
                onClick={() => alert('Thank you for your purchase!')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
              >
                Confirm Purchase
              </button>
              <button
                onClick={() => setCheckout(false)}
                className="mt-2 text-blue-500 underline hover:text-blue-700"
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
