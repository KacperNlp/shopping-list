import Product from "./Product";

const Shop = ({ products, addToCart }) => {
  const productsList = products.map((product, id) => (
    <li className="shop-product" key={id}>
      <Product
        name={product.name}
        price={product.price}
        addToCart={addToCart}
      />
    </li>
  ));

  return (
    <div className="shop">
      <ul>{productsList}</ul>
    </div>
  );
};

export default Shop;
