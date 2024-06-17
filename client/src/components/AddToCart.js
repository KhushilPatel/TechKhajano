import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product, color }) => {
  const { addToCart } = useCartContext();
  const { id, stock } = product;

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const handleClick = () => {
    addToCart(id, color, amount, product);
    window.scrollTo(0, 0);
  };

  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <div className="mb-4">
        {/* Uncomment and style this block if colors functionality is needed */}
        {/* <div className="flex mb-4">
          <p className="mr-2">Colors:</p>
          <div className="flex">
            {colors.map((curColor, index) => (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={`p-1 rounded-full mx-1 h-6 w-6 flex items-center justify-center ${
                  color === curColor ? "border-2 border-gray-800" : ""
                }`}
                onClick={() => setColor(curColor)}
              >
                {color === curColor && <FaCheck className="w-3 h-3 text-white" />}
              </button>
            ))}
          </div>
        </div> */}
        <div className="flex items-center">
          <h3 className="mr-2">Quantity:</h3>
          <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <NavLink to="/cart" onClick={handleClick} className="flex-1">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded py-2 px-4">
            Add To Cart
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AddToCart;
