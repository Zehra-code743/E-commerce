
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  color: string;
  imageUrl: string;
  quantity: number; // Quantity field added
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void; // New function added
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === item.id && cartItem.color === item.color
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id && cartItem.color === item.color
            ? { ...cartItem, quantity: cartItem.quantity + 1 } // Increase quantity if item already exists
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity: 1 }]; // Add new item with quantity 1
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
