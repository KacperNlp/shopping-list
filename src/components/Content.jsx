import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import ShoppingList from "./ShoppingList";
import Wallet from "./Wallet";

import "./Content.css";

class Content extends Component {
  state = {
    cart: [],
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
    wallet: 1000,
  };

  addProdcutToCart = (name, price) => {
    const newWalletValue = this.state.wallet - price;

    if (newWalletValue <= 0) {
      alert("You cannot add this product to your cart!");
      return;
    }

    const newCart = this.updateCart(name, price);

    this.setState({
      wallet: newWalletValue,
      cart: newCart,
    });
  };

  updateCart = (name, price) => {
    const { cart } = this.state;

    if (!cart || !cart.filter((prodcut) => prodcut.name === name).length)
      return [...cart, { name, price, count: 1 }];

    const newCart = cart.map(
      ({ nameOfProductInCart, priceOfProductInCart, count }) => {
        if (nameOfProductInCart === name) {
          return {
            name: nameOfProductInCart,
            price: priceOfProductInCart + price,
            count: count++,
          };
        }

        return {
          name: nameOfProductInCart,
          price: priceOfProductInCart,
          count,
        };
      }
    );

    return newCart;
  };

  render() {
    const { cart, products, wallet } = this.state;

    return (
      <div className="content">
        <Routes>
          <Route path="/wallet" element={<Wallet money={wallet} />}></Route>
          <Route
            path="/shop"
            element={
              <Shop products={products} addToCart={this.addProdcutToCart} />
            }
          ></Route>
          <Route path="/" element={<ShoppingList cart={cart} />}></Route>
        </Routes>
      </div>
    );
  }
}

export default Content;
