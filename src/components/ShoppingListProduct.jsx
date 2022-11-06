import Button from "./Button";

import "./ShoppingListProduct.css";

const ShoppingListProduct = ({ name, price, count, onRemoveFromCart }) => {
  return (
    <li className="shopping-list-prodcut">
      <p className="shopping-list-prodcut-properties">
        <span className="shopping-list-prodcut-name">{name}</span>
        <span className="shopping-list-prodcut-price">{price}$</span>
        <span className="shopping-list-prodcut-count">[{count}]</span>
      </p>
      <Button
        text="Remove from Cart"
        functionOnClick={() => {
          onRemoveFromCart(name, price / count);
        }}
        classes="button-delete"
      />
    </li>
  );
};

export default ShoppingListProduct;
