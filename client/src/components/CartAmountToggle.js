import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle flex space-x-3 ">
        <button className="boredr-2 bg-slate-300 p-1" onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style text-xl">{amount}</div>
        <button  className="boredr-2 bg-slate-300 p-1" onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
