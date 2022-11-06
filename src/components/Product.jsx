import Button from "./Button";
import "./Product.css";

const Product = ({ name, price, addToCart }) => {
  return (
    <li className="product-list-element">
      <p className="product-name">
        {name} <span className="product-price">- {price}$</span>
      </p>
      <Button
        text="Add to cart"
        functionOnClick={() => {
          addToCart(name, price);
        }}
        classes="button-add"
      />
    </li>
  );
};

export default Product;
