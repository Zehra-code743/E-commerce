// src/pages/_app.tsx or src/app/layout.tsx
import { CartProvider } from '@/context/CartContext'; // Import the CartProvider

function MyApp() {
  return (
    <CartProvider>  {/* Wrap your app with the CartProvider */}
      <h1>Your App</h1> {/* You can replace this with your actual content */}
    </CartProvider>
  );
}

export default MyApp;
