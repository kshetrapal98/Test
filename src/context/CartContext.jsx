 

import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

 

const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existing = state.find(item => item.id === action.payload.id);
        if (existing) {
          return state.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          );
        } else {
          return [...state, { ...action.payload, qty: 1 }];
        }
  
      case 'INCREMENT_QTY':
        return state.map(item =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        );
  
      case 'DECREMENT_QTY':
        return state
          .map(item =>
            item.id === action.payload
              ? { ...item, qty: item.qty - 1 }
              : item
          )
          .filter(item => item.qty > 0);
  
      case 'REMOVE_FROM_CART':
        return state.filter(item => item.id !== action.payload);
  
      default:
        return state;
    }
  };
  
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

   
  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, dispatch, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
