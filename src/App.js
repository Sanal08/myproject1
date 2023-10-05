import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartContextProvider from "./store/CartContextProvider";

export default function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}
