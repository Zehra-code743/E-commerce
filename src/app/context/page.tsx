// // "use client";
// // import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// // export interface CartItem {
// //   _id: string;
// //   title: string;
// //   price: number;
// //   image: string;
// //   quantity: number;
// // }

// // interface CartContextType {
// //   cart: CartItem[];
// //   cartCount: number;
// //   addToCart: (product: CartItem) => void;
// //   removeFromCart: (id: string) => void;
// //   updateQuantity: (id: string, quantity: number) => void;
// //   clearCart: () => void;
// // }

// // const CartContext = createContext<CartContextType | undefined>(undefined);

// // export const CartProvider = ({ children }: { children: ReactNode }) => {
// //   // Load cart from localStorage on mount
// //   const [cart, setCart] = useState<CartItem[]>(() => {
// //     if (typeof window !== "undefined") {
// //       const savedCart = localStorage.getItem("cart");
// //       return savedCart ? JSON.parse(savedCart) : [];
// //     }
// //     return [];
// //   });

// //   const [cartCount, setCartCount] = useState<number>(0);

// //   // Update cartCount and store cart in localStorage whenever cart changes
// //   useEffect(() => {
// //     const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
// //     setCartCount(totalCount);
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //   }, [cart]);

// //   // Add product to cart
// //   const addToCart = (product: CartItem) => {
// //     setCart((prevCart) => {
// //       const existingItem = prevCart.find((item) => item._id === product._id);
// //       if (existingItem) {
// //         return prevCart.map((item) =>
// //           item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
// //         );
// //       } else {
// //         return [...prevCart, { ...product, quantity: 1 }];
// //       }
// //     });
// //   };

// //   // Remove product from cart
// //   const removeFromCart = (id: string) => {
// //     setCart((prevCart) => prevCart.filter((item) => item._id !== id));
// //   };

// //   // Update product quantity in cart
// //   const updateQuantity = (id: string, quantity: number) => {
// //     if (quantity < 1) return; // Prevent zero or negative values
// //     setCart((prevCart) =>
// //       prevCart.map((item) =>
// //         item._id === id ? { ...item, quantity } : item
// //       )
// //     );
// //   };

// //   // Clear cart
// //   const clearCart = () => {
// //     setCart([]);
// //     setCartCount(0);
// //     localStorage.removeItem("cart");
// //   };

// //   return (
// //     <CartContext.Provider
// //       value={{
// //         cart,
// //         cartCount,
// //         addToCart,
// //         removeFromCart,
// //         updateQuantity,
// //         clearCart,
// //       }}
// //     >
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // export const useCart = () => {
// //   const context = useContext(CartContext);
// //   if (!context) throw new Error("useCart must be used within a CartProvider");
// //   return context;
// // };












// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   color: string;
//   imageUrl: string;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => {
//       if (prevCart.some((cartItem) => cartItem.id === item.id && cartItem.color === item.color)) {
//         return prevCart;
//       }
//       return [...prevCart, item];
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };











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
