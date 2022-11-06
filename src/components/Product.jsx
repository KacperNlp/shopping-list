const Prodcut = ({ name, price }) => {
  return (
    <li className="product-list-element">
      <p className="product-name">
        ${name} <span className="product-price">- ${price}</span>
      </p>
    </li>
  );
};

export default Prodcut;
