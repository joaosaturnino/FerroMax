import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './hooks/CartContext'; // 1. Importe o CartProvider
import './assets/global.css'; // 2. Descomentei o CSS para a página ficar bonita

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Envolva o App com o CartProvider */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
);