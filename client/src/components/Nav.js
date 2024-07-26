import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import { RiShoppingCartLine, RiCustomerService2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { BiChat } from "react-icons/bi";

const Nav = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <nav className="flex items-center space-x-4">
      <NavLink
        exact
        to="/products"
        className="text-white text-lg font-medium px-3 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded"
      >
        Products
      </NavLink>
      <NavLink
        exact
        to="/about"
        className="text-white text-lg font-medium px-3 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded"
      >
        About Us
      </NavLink>
      <NavLink
        exact
        to="/cart"
        className="text-white text-lg font-medium px-3 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded flex items-center"
      >
        <RiShoppingCartLine className="mr-1" />
        Cart
      </NavLink>
      <NavLink
        exact
        to="/orders"
        className="text-white text-lg font-medium px-3 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded"
      >
        Orders
      </NavLink>
      <NavLink
        exact
        to="/chat"
        className="text-white text-lg font-medium px-3 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded flex items-center"
      >
        <BiChat className="mr-1" />
        Chat
      </NavLink>
      <NavLink
        exact
        to="/contact"
        className="text-white text-lg font-medium px-3 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded flex items-center"
      >
        <RiCustomerService2Line className="mr-1" />
        Contact Us
      </NavLink>
      <div className="relative flex items-center text-white text-lg">
        <div>{user ? `Hello, ${user.username}` : "Hello, sign in"}</div>
        {isLoggedIn && (
          <NavLink
            exact
            to="/logout"
            className="ml-4 text-red-500 px-4 py-2 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white rounded"
          >
            Logout
          </NavLink>
        )}
        {!isLoggedIn && (
          <>
            <NavLink
              to="/login"
              className="ml-4 text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/register"
              className="ml-4 text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded"
            >
              New Customer
            </NavLink>
          </>
        )}
      </div>
      <div className="flex items-center ml-4">
        <FaRegUser className="text-white" />
        {isLoggedIn && <p className="text-white ml-1">1</p>}
      </div>
    </nav>
  );
};

export default Nav;