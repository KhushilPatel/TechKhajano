import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import styled from "styled-components";
import { useAuth } from "../context/auth";
import { FaRegUser } from "react-icons/fa";
import { useFilterContext } from "../context/filter_context";
import { RiShoppingCartLine } from "react-icons/ri";
const HeaderContainer = styled.header`
  background-color: #232f3e;
  height: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 20px;
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const NavItem = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4a5f75;
    border-radius: 5px;
  }

  &.active {
    font-weight: 700;
    border-bottom: 2px solid #ffffff;
  }

`;
const HomeLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4a5f75;
    border-radius: 5px;
  }

`;

const SearchContainer = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 600px;
  margin: 0 20px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #febd69;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #f3a847;
  }
`;

const AccountSection = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  position: relative;
`;

const CartIcon = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #232f3e;
  min-width: 160px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1;
  display: ${(props) => (props.open ? "block" : "none")};
`;

const DropdownItem = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  display: block;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a5f75;
    border-radius: 5px;
  }
`;
const LogoutItem = styled(NavLink)`
  color: #ff6961; // Custom color for logout
  text-decoration: none;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff6961;
    color: #ffffff;
    border-radius: 5px;
  }

  &.active {
    font-weight: 700;
    border-bottom: 2px solid #ff6961;
  }
`;


const Header = () => {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {isLoggedIn}=useAuth()
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const { filters: { text }, updateFilterValue } = useFilterContext();

  const handleSearch = () => {
    if (text.trim() !== "") {
      navigate("/products"); // Navigate to /products route
    }
  };

  return (
    <HeaderContainer>
      <NavMenu>
        <HomeLink exact to="/">
          Home
        </HomeLink>
      </NavMenu>
      <SearchContainer>
        <SearchInput
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={updateFilterValue}
          className="p-2 w-4/5"
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      
      <NavMenu>
        <NavItem exact to="/products">
          Products
        </NavItem>
        <NavItem exact to="/about">
          About Us
        </NavItem>
        <NavItem exact to="/contact">
          Contact
        </NavItem>
        <NavItem exact to="/cart" className="flex items-center">
          <CartIcon>
            <RiShoppingCartLine className="text-white mr-1" />
          </CartIcon>
          Cart
        </NavItem>
        {isLoggedIn &&  
        <LogoutItem exact to="/logout">
          Logout
        </LogoutItem>}
      </NavMenu>
      <AccountSection onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div>
          {user ? `Hello, ${user.username}` : "Hello, sign in"}
        
        </div>
        <DropdownMenu open={dropdownOpen}>
        {!isLoggedIn &&
        <>
          <DropdownItem to="/login">Sign In</DropdownItem>
          <DropdownItem to="/register">New Customer</DropdownItem>
        </>
        }
         <DropdownItem to="/contact">Contact Us</DropdownItem>
        </DropdownMenu>
      </AccountSection>
      <CartIcon>
        <FaRegUser className="text-white" />
        {isLoggedIn && <p className="text-white">1</p>}
      </CartIcon>
    </HeaderContainer>
  );
};

export default Header;
