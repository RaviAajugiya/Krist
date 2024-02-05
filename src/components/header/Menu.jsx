import React from "react";
import { motion } from "framer-motion";
import Logo from "../common/Logo";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../common/Button";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { URL } from "../config/URLHelper";

const Menu = ({ toggleMenu }) => {
  return (
    <div className="h-svh z-20 bg-white absolute top-0 left-0 p-4 min-w-72">
      <div className="flex justify-between">
        <Logo className="w-24" />
        <IoCloseSharp
          className="size-8"
          onClick={() => {
            toggleMenu(false);
          }}
        />
      </div>
      <ul className="flex flex-col text-lg mt-4">
        <li className="border-b p-3">
          <NavLink
            to={URL.HOME}
            className={({ isActive }) => (isActive ? "font-semibold" : null)}>
            Home
          </NavLink>
        </li>
        <li className="border-b p-3">
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : null)}
            to={URL.SHOP}>
            Shop
          </NavLink>
        </li>
        <li className="border-b p-3">
          <NavLink to={URL.STORY}>Our Story</NavLink>
        </li>
        <li className="border-b p-3">
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : null)}
            to={URL.CONTACT}>
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-2 mt-auto absolute bottom-3 w-[calc(100%-2rem)] justify-center">
        <Button className="flex items-center justify-center gap-2 flex-grow">
          <CgProfile />
          Profile
        </Button>
        <Button className="flex items-center justify-center gap-2 flex-grow">
          <RiLogoutBoxRLine />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Menu;
