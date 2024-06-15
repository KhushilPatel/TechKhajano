import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
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
    <div className="p-1 rounded-2xl flex justify-between">
      <div className="flex space-x-40">
        <div className="flex items-center mb-4">
          <p className="mr-2">Colors:</p>
          <div className="flex items-center">
            {colors.map((curColor, index) => (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={`p-1 rounded-full mx-1 h-6 w-6 flex items-center justify-center ${
                  color === curColor ? "bg-gray-800 text-white" : ""
                }`}
                onClick={() => setColor(curColor)}
              >
                {color === curColor && <FaCheck className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>

        <div className="">
          <h4 className="pl-3">Quantity</h4>

          <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />
        </div>
      </div>
      <div>
        <NavLink to="/cart" onClick={handleClick}>
          <Button className="btn">Add To Cart</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default AddToCart;
