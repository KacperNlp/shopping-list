const Product = ({ name, price, addToCart }) => {
  return (
    <li className="product-list-element">
      <p className="product-name">
        {name} <span className="product-price">- {price}$</span>
      </p>
      <button
        onClick={() => {
          addToCart(name, price);
        }}
      >
        Add to cart
      </button>
    </li>
  );
};

export default Product;
