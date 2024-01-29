import React from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../config/URLHelper";

function Product({ name, price, description, img, id }) {
  const navigate = useNavigate();
  return (
    <div className="m-auto p-2 sm:w-52 lg:w-60">
      <img src={img?.url} alt="" className="w-full  h-60 sm:h-64 lg:h-72" />
      <div className="mt-2 flex flex-col gap-1">
        <p
          className="font-semibold text-xl cursor-pointer"
          onClick={() => {
            navigate(`${URL.PRODUCTDETAIL}/${id}`);
          }}
        >
          {name}
        </p>
        <p>{description}</p>
        <div className="flex items-center mt-1">
          <span className=" font-semibold">${price}</span>
          <s className="text-light-grey ml-2">${price}</s>
        </div>
      </div>
    </div>
  );
}

export default Product;
