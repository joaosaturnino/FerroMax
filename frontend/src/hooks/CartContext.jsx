import React, { createContext, useState, useContext } from 'react';

// Cria o contexto
const CartContext = createContext();

// Provider que vai englobar a aplicação
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Função para adicionar ao carrinho
  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      
      // Se o item já existe, aumenta a quantidade
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      
      // Se não existe, adiciona com quantidade 1
      return [...prevCart, { ...product, quantidade: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook customizado para facilitar o uso nos componentes
export function useCart() {
  return useContext(CartContext);
}