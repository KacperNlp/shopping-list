import ShoppingListProduct from "./ShoppingListProduct";

import "./ShoppingList.css";

const ShoppingList = ({ cart, removeProductFromCart }) => {
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

  const cartSummary = 200;

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
