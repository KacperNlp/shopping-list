import "./ShoppingListProduct.css";

const ShoppingListProduct = ({ name, price, count, onRemoveFromCart }) => {
  return (
    <li className="shopping-list-prodcut">
      <p>
        <span className="shopping-list-prodcut-name">{name}</span>
        <span className="shopping-list-prodcut-price">{price}$</span>
        <span className="shopping-list-prodcut-count">[{count}]</span>
      </p>
      <button
        onClick={() => console.log("Remove from cart!")}
        className="button"
      >
        Remove from Cart
      </button>
    </li>
  );
};

export default ShoppingListProduct;
