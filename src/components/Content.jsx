import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import ShoppingList from "./ShoppingList";
import Wallet from "./Wallet";

import "./Content.css";

class Content extends Component {
  state = {
    wallet: 1000,
    products: [
      {
        name: "Computer",
        price: 850,
      },
      {
        name: "Keyboard",
        price: 80,
      },
      {
        name: "Headphones",
        price: 100,
      },
      {
        name: "Car",
        price: 2500,
      },
    ],
  };

  render() {
    const { wallet } = this.state;

    return (
      <div className="content">
        <Routes>
          <Route path="/wallet" element={<Wallet money={wallet} />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/" element={<ShoppingList />}></Route>
        </Routes>
      </div>
    );
  }
}

export default Content;
