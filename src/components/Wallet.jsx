import "./Wallet.css";

const Wallet = ({ money }) => {
  return (
    <div className="wallet">
      <p className="wallet-header">Wallet:</p>
      <span className="wallet-money">{money}$</span>
    </div>
  );
};

export default Wallet;
