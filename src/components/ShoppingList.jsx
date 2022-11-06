import React, { useEffect, useState } from "react";
import ShoppingListProduct from "./ShoppingListProduct";

import "./ShoppingList.css";

const ShoppingList = ({ cart, removeProductFromCart }) => {
  const [cartSummary, setCartSummary] = useState(0);

  const productsInCart = cart.map(({ name, price, count }) => {
    return (
      <ShoppingListProduct
        name={name}
        price={price}
        count={count}
        onRemoveFromCart={removeProductFromCart}
        key={name}
      />
    );
  });

  useEffect(() => {
    let newCartSummary = 0;

    cart.forEach(({ price }) => {
      newCartSummary += price;
    });

    setCartSummary(newCartSummary);
  });

  if (!cartSummary) {
    return (
      <div className="shopping-list-container shopping-list-container-with-message">
        <p className="shopping-list-container-message">
          You don't have any products!
        </p>
      </div>
    );
  }

  return (
    <div className="shopping-list-container">
      <header>
        <ul className="shopping-list-headers">
          <li>Name:</li>
          <li>Price:</li>
          <li>Stock:</li>
        </ul>
      </header>
      <ul className="shopping-list">{productsInCart}</ul>
      <div className="shopping-list-summary">
        You will have to pay: {cartSummary}$
      </div>
    </div>
  );
};

export default ShoppingList;
