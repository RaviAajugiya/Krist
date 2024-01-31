import React from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../config/URLHelper";

function Product({ name, price, description, img, id }) {
  const navigate = useNavigate();
  return (
    <div key={id} className="p-2 m-auto max-w-[220px]">
      <img
        src="https://assets.ajio.com/medias/sys_master/root/20231124/LFcS/6560ca8dafa4cf41f59da776/-473Wx593H-442271744-ltgrey-MODEL.jpg"
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="mt-2 flex flex-col gap-1">
        <p
          className="font-semibold text-xl cursor-pointer"
          onClick={() => {
            navigate(`${URL.PRODUCTDETAIL}/${id}`);
          }}>
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
