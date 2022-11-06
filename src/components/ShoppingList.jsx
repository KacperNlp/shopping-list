import ShoppingListProduct from "./ShoppingListProdcut";

const ShoppingList = ({ cart }) => {
  const productsInCart = cart.map(({ name, price, count }) => {
    return (
      <ShoppingListProduct
        name={name}
        price={price}
        count={count}
        onRemoveFromCart={null}
      />
    );
  });
  return (
    <div className="shopping-list">
      <ul>{productsInCart}</ul>
    </div>
  );
};

export default ShoppingList;
