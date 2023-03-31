import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import ItemsCard from "./components/ItemsCard";
import CartContext from "./store/cart-context";



function App() {
  return (
      <div className="App">
        <Header />
        <body>
          <Greeting></Greeting>
          <ItemsCard></ItemsCard>
          <Cart></Cart>
        </body>
      </div>
  );
}

export default App;
