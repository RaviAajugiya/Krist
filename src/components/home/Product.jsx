import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../config/URLHelper";
import { motion } from "framer-motion";
import {
  useAddToCartMutation,
  useGetCartItemsQuery,
} from "../../redux/api/cartApi";
import { toast } from "react-toastify";

function Product({ name, price, description, img, id }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [addToCart, { isSuccess }] = useAddToCartMutation();
  const { data: cartData } = useGetCartItemsQuery();
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    setIsProductInCart(
      cartData?.data?.items.some((item) => item.product._id === id)
    );
  }, [cartData]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(`${name} successfully added to cart`);
    }
  }, [isSuccess]);

  return (
    <div className="product-container m-auto">
      <div
        className="product-image-container relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img
          src="https://assets.ajio.com/medias/sys_master/root/20231124/LFcS/6560ca8dafa4cf41f59da776/-473Wx593H-442271744-ltgrey-MODEL.jpg"
          // src={img.url}
          alt=""
          className="product-image w-fit h-fit object-cover"
        />
        {isHovered && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
            className="product-button absolute w-[calc(100%-1rem)] bottom-0 left-0 bg-black bg-opacity-55 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => {
              !isProductInCart
                ? addToCart({ id, quantity: 1 })
                : navigate(URL.CART);
            }}>
            {!isProductInCart ? "Add to Cart" : "Go to Cart"}
          </motion.button>
        )}
      </div>
      <div className="product-details mt-2 flex flex-col gap-1">
        <p
          className="product-name font-semibold text-xl cursor-pointer line-clamp-1"
          onClick={() => {
            navigate(`${URL.PRODUCTDETAIL}/${id}`);
          }}>
          {name}
        </p>
        <p className="product-description line-clamp-1">{description}</p>
        <div className="product-price flex items-center mt-1">
          <span className="font-semibold">${price}</span>
          <s className="product-old-price text-light-grey ml-2">${price}</s>
        </div>
      </div>
    </div>
  );
}

export default Product;
