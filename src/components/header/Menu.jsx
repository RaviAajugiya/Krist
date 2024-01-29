import React from "react";
import Logo from "../common/Logo";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../common/Button";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";

function Menu({ toggleMenu }) {
  return (
    <div className="h-svh z-10 bg-white absolute top-0 left-0 p-4 min-w-72">
      <div className="flex justify-between">
        <Logo className="w-24" />
        <IoCloseSharp
          className="size-10"
          onClick={() => {
            toggleMenu(false);
          }}
        />
      </div>
      <ul className="flex flex-col text-lg mt-4">
        <li className="border-b p-3">Home</li>
        <li className="border-b p-3">Shop</li>
        <li className="border-b p-3">Contact Us</li>
        <li className="border-b p-3">Blog</li>
        <li className="border-b p-3">Our Story</li>
      </ul>
      <div className="flex gap-2 mt-auto absolute bottom-3 w-[calc(100%-2rem)]">
        <Button className="flex items-center justify-between gap-2 flex-grow">
          <CgProfile />
          Profile
        </Button>
        <Button className="felx items-center justify-between gap-2 flex-grow">
          <RiLogoutBoxRLine />
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Menu;
