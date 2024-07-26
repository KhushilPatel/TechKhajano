import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black w-full py-2 px-4 md:py-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="mb-4 md:mb-0">
          <img
            className="h-16 md:h-28 object-contain"
            src="/images/techKhajano.png"
            alt="Tech Khajano"
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
