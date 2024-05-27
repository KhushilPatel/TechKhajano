import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
import { useAuth } from "../store/auth";

const Nav = () => {
  const { isLoggedIn } = useAuth();
  const { total_item } = useCartContext();

  return (
    <nav >
      <div className="flex  justify-end bg-gray-700 m-4 rounded-full ">
        <ul className="flex gap-10 text-xl  justify-end items-center m-5">
          <li>
            <NavLink
              to="/"
              className="text-white hover:text-bubble-gum"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white hover:text-bubble-gum"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="text-white hover:text-bubble-gum"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-white hover:text-bubble-gum"
            >
              Contact
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink
                to="/logout"
                className="text-white hover:text-bubble-gum"
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  to="/register"
                  className="text-white hover:text-bubble-gum"
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="text-white hover:text-bubble-gum"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/cart"
              className="text-white hover:text-bubble-gum"
            >
              <FiShoppingCart className="inline-block text-2xl" />
              <span className="ml-1">{total_item}</span>
            </NavLink>
          </li>
        </ul>

        <div className="block sm:hidden">
          <button
            className="text-white hover:text-bubble-gum"
          >
            <CgMenu className="text-3xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
