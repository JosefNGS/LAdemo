import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/CartContext';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <CartProvider>
      <App />
    </CartProvider>
  );
}

