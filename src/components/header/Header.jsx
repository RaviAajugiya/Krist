import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../common/Button";
import { login, logout } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../config/URLHelper";
import { useNavigate } from "react-router-dom";
import { CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoIosMenu } from "react-icons/io";
import Menu from "./Menu";
import Overlay from "../common/Overlay";
import { useUserLogoutMutation } from "../../redux/api/authApi";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.authSlice.userData);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userLogout] = useUserLogoutMutation();

  return (
    <header className="flex items-center justify-between h-16 lg:h-20 max-w-[1300px] px-5 m-auto">
      <Logo className="w-24" />
      <nav>
        <ul className="hidden md:flex gap-7 text-base">
          <li>
            <NavLink
              to={URL.HOME}
              className={({ isActive }) => (isActive ? "font-semibold" : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "font-semibold" : null)}
              to={URL.SHOP}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "font-semibold" : null)}
              to={URL.HOME}
            >
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "font-semibold" : null)}
              to={URL.HOME}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "font-semibold" : null)}
              to={URL.HOME}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      {isMenuOpen ? <Menu toggleMenu={(val) => setIsMenuOpen(val)} /> : null}
      {isMenuOpen ? <Overlay /> : null}
      <div className="flex gap-5 items-center">
        <CiShoppingCart className="size-6" onClick={() => navigate(URL.CART)} />
        <p className="flex gap-3 text-xl items-center">
          <VscAccount className="hidden md:block size-6" />
          {userData?.data?.user?.username}
        </p>
        <IoIosMenu
          className="md:hidden size-7"
          onClick={() => setIsMenuOpen(true)}
        />

        {userData ? (
          <Button
            className="hidden md:block p-2 w-24"
            onClick={() => {
              localStorage.removeItem("userData");
              userLogout();
              dispatch(logout());
              window.location.reload();
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="hidden md:block p-2 w-24"
            onClick={() => {
              navigate(URL.AUTH);
            }}
          >
            Login
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
