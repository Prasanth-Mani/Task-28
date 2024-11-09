import React from "react";
import ShoppingCart from './ShoppingCart.jsx';
import CartContextComponent from "./CartContextComponent.jsx";
function App() {
  return (
    <CartContextComponent>
        <ShoppingCart />
    </CartContextComponent>
  );
}

export default App;