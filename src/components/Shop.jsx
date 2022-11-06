import Product from "./Product";

import "./Shop.css";

const Shop = ({ products, addToCart }) => {
  const productsList = products.map((product, id) => (
    <Product
      name={product.name}
      price={product.price}
      addToCart={addToCart}
      key={id}
    />
  ));

  return (
    <div className="shop">
      <ul className="shop-list">{productsList}</ul>
    </div>
  );
};

export default Shop;
