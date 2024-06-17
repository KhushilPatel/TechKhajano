import React from "react";

import Nav from "./Nav";



const Header = () => {
 
  return (
    <div className="flex bg-black py-4 w-full items-center">
      <img
        className="text-white h-28"
        src="/images/techKhajano.png"
        alt="Tech Khajano"
      />
      <Nav />
    
    </div>
  );
};

export default Header;
