import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../common/Button";
import { logout } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { URL } from "../config/URLHelper";
import { useNavigate } from "react-router-dom";
import { CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoIosMenu } from "react-icons/io";
import Menu from "./Menu";
import Overlay from "../common/Overlay";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between h-16 lg:h-20 max-w-[1300px] px-5 m-auto">
      <Logo className="w-24" />
      <nav>
        <ul className="hidden md:flex gap-7 text-base">
          <li>
            <NavLink to={URL.HOME} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={URL.SHOP} activeClassName="active">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={URL.HOME} activeClassName="active">
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink to={URL.HOME} activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to={URL.HOME} activeClassName="active">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      {isMenuOpen ? <Menu toggleMenu={(val) => setIsMenuOpen(val)} /> : null}
      {isMenuOpen ? <Overlay/> : null}
      <div className="flex gap-5 items-center">
        {/* <CiSearch className="size-6"/> */}
        {/* <CiHeart className="size-6"/> */}
        <CiShoppingCart className="size-6" onClick={() => navigate(URL.CART)} />
        <VscAccount className="hidden md:block size-6" />
        <IoIosMenu
          className="md:hidden size-7"
          onClick={() => setIsMenuOpen(true)}
        />
        <Button
          className=" hidden md:block p-2 w-24"
          onClick={() => {
            localStorage.removeItem("email");
            dispatch(logout());
            navigate(URL.HOME);
          }}>
          Logout
        </Button>
      </div>
    </header>
  );
}

export default Header;
