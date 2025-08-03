import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, CartState, Product } from '../types';

interface CartContextType extends CartState {
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  getCartItemKey: (productId: string, size: string, color: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const getCartItemKey = (productId: string, size: string, color: string) => {
    return `${productId}-${size}-${color}`;
  };

  const addToCart = (product: Product, size: string, color: string, quantity = 1) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => 
        getCartItemKey(item.product.id, item.selectedSize, item.selectedColor) === 
        getCartItemKey(product.id, size, color)
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, {
          product,
          quantity,
          selectedSize: size,
          selectedColor: color
        }];
      }
    });
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setItems(prevItems => 
      prevItems.filter(item => 
        getCartItemKey(item.product.id, item.selectedSize, item.selectedColor) !== 
        getCartItemKey(productId, size, color)
      )
    );
  };

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }

    setItems(prevItems => 
      prevItems.map(item => 
        getCartItemKey(item.product.id, item.selectedSize, item.selectedColor) === 
        getCartItemKey(productId, size, color)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      total,
      itemCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartItemKey
    }}>
      {children}
    </CartContext.Provider>
  );
};