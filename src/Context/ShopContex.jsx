import React, { createContext, useEffect, useState } from "react";
import all_product from "../Components/assets/all_product";

import AOS from "aos";
import "aos/dist/aos.css"
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < all_product.length + 1; i++) {
    cart[i] = 0;
  } 
  return cart;
};


const ShopContextProvider = (props) => {
  useEffect(()=>{
    AOS.init()}
    )
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((e) => e.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };

  const getTotoalCartItems=()=>{
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }

  const contextValue = {
    getTotalCartAmount,
    getTotoalCartItems,
    all_product,
    cartItems,
    addToCart,
    removeFromCart
  
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
