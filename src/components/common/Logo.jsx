import React from "react";
import Krist from "./../../assets/Krist.svg";
import { Link } from "react-router-dom";
import { URL } from "../config/URLHelper";

function Logo({ className }) {
  return (
    <Link to={URL.HOME}>
      <div className={`${className}`}>
        <img src={Krist} alt="" />
      </div>
    </Link>
  );
}

export default Logo;