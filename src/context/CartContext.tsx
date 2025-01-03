import { createContext, useContext, ReactNode } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<any>(null);

const CartProvider = ({ children }: CartProviderProps) => {
  const {
    cartCount,
    cartDetails,
    addItem,
    removeItem,
    totalPrice,
    clearCart,
  } = useShoppingCart();

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartDetails,
        addItem,
        removeItem,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
