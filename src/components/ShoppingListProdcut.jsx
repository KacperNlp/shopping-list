const ShoppingListProduct = ({ name, price, count, onRemoveFromCart }) => {
  return (
    <li>
      <p>
        <span>{name}</span>
        <span>{price}</span>
        <span>{count}</span>
      </p>
      <button onClick={() => console.log("Remove from cart!")}>
        Remove from Cart
      </button>
    </li>
  );
};

export default ShoppingListProduct;
