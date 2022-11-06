import { Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import ShoppingList from "./ShoppingList";
import Wallet from "./Wallet";

import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/wallet" element={<Wallet money={20} />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/" element={<ShoppingList />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
