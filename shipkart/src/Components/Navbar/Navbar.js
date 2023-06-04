import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineLocalMall } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import logo from "../../Assets/shoppingCart.png";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { DataState } from "../../Contexts/Data/DataContext";

export const Navbar = () => {
    const [menuClass, setMenuClass] = useState("hide-menu");
  
    const {
      state: { cart, wishlist },
      dispatch,
    } = DataState();
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
  
  
    return (
      <>
        <nav className=" navigation flex justify-between align-center">
          <h1 className="navigation-header">
            <NavLink className="header-link flex align-center" to="/">
              <img src={logo} alt="logo" width={40} />{" "}
              <span className="margin-left-1"> ShipKart</span>
            </NavLink>
          </h1>
          <div className="search-navBar">
            <input
              type="text"
              list="search-products"
              className="search-bar"
              placeholder="Search Product"
            //   onChange={handleSearchProduct}
            />
          </div>
  
  
          <ul className={menuClass}>
            <li className="menu-item">
              <NavLink className="nav-link" >
                <MdOutlineLocalMall />
              </NavLink>
            </li>
            <li className="menu-item menu-item-cart">
              <NavLink  className="nav-link">
                <AiOutlineHeart />
              </NavLink>
            </li>
            <li className="menu-item menu-item-cart">
              <NavLink  className="nav-link">
                <AiOutlineShoppingCart />
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="nav-link">
                <AiOutlineUser />
              </NavLink>
            </li>
          </ul>
          <ul className="menus-md">
            <li className="menu-item">
              <NavLink className="nav-link" >
                <MdOutlineLocalMall />
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="nav-link">
                <AiOutlineHeart />
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink  className="nav-link">
                <AiOutlineShoppingCart />
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="nav-link">
                <AiOutlineUser />
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="search-navBar-mobile-view ">
          <input
            type="text"
            list="search-products"
            className="search-bar"
            placeholder="Search here..."
          />
        </div>
      </>
    );
  };
