import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";



const Header = () => {
  return (
    <header className="flex justify-center items-center bg-black py-4">
      <img
        className="text-white h-28"
        src="/images/techKhajano.png"
        alt="Tech Khajano"
      />
      <Nav />
    </header>
  );
};

export default Header;
