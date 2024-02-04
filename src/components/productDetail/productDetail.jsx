import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import Button from "../common/Button";
import { IoIosArrowRoundForward, IoMdAdd, IoMdRemove } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Product from "../home/Product";
import {
  useGetListingProductQuery,
  useGetProductByIdQuery,
} from "../../redux/api/productApi";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddToCartMutation,
  useGetCartItemsQuery,
} from "../../redux/api/cartApi";
import { URL } from "../config/URLHelper";
import { toast } from "react-toastify";
import ProductQuantity from "../common/ProductQuantity";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();
  const { data: listingProduct } = useGetProductByIdQuery(id);
  const [isProductInCart, setIsProductInCart] = useState(false);

  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-orange-500"];
  const size = ["S", "M", "L", "XL", "XXL"];

  const { data: cartData } = useGetCartItemsQuery();
  useEffect(() => {
    setIsProductInCart(
      cartData?.data?.items.some((item) => item.product._id === id)
    );
  }, [cartData]);

  const { data: productsData } = useGetListingProductQuery({
    page: 1,
    limit: 50,
  });

  useEffect(() => {
    setProducts(productsData?.data?.products || []);
    setProduct(listingProduct?.data);
  }, [productsData, id]);

  useEffect(() => {
    setProduct(listingProduct?.data);
  }, [listingProduct, id]);

  const [addToCart, { isSuccess }] = useAddToCartMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Product successfully added to cart`);
    }
  }, [isSuccess]);

  return (
    <>
      <div className=" px-5 md:flex justify-between gap-10 flex-wrap text-primary max-w-[1300px] m-auto">
        <div className="w-full lg:w-1/2 max-w-[400px] m-auto">
          <img
            src={product?.mainImage.url}
            alt=""
            className="m-auto size-[400px]"
          />
          <div className="hidden sm:flex justify-between mt-10">
            <img src="https://placehold.co/400" alt="" className="w-1/5" />
            <img src="https://placehold.co/400" alt="" className="w-1/5" />
            <img src="https://placehold.co/400" alt="" className="w-1/5" />
            <img src="https://placehold.co/400" alt="" className="w-1/5" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 pt-5 text-base ">
          <h1 className="text-2xl font-semibold">{product?.name}</h1>
          {/* <h3 className=""> {product?.description}</h3> */}
          <p className="text-secondary-text my-2 ">
            <StarRatings
              rating={4.5}
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
              starDimension="17px"
              starSpacing="2px"
            />
          </p>
          <div className="flex items-center mt-1">
            <span className=" font-semibold">${product?.price}</span>
            <s className="text-light-grey ml-2">${product?.price}</s>
          </div>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            repellendus unde enim obcaecati ipsum ipsam aspernatur. Dolor animi,
            voluptate ea eligendi libero, pariatur veritatis impedit beatae
            error, placeat qui dignissimos.
          </p>

          <div>
            <h3 className="py-3 text-lg font-semibold">Color</h3>
            <div className="flex gap-2 justify-start flex-1">
              {colors.map((color) => (
                <div
                  className={`${color} flex gap-2 p-[14px] rounded-[0.200em]  border-primary`}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="py-3 text-lg font-semibold">Size</h3>
            <div className="flex gap-2 justify-start flex-1">
              {size.map((size) => (
                <div
                  key={size}
                  className="bg-primary-color text-white p-1 w-9 text-center border border-primary-color rounded-[0.200em] border-primary"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 my-5 h-12">
            <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
            <Button
              className="w-40 flex-grow "
              onClick={() => {
                !isProductInCart
                  ? addToCart({ id, quantity })
                  : navigate(URL.CART);
              }}
            >
              {!isProductInCart ? "Add to Cart" : "Go to Cart"}
            </Button>
            <Button className="bg-white-color text-primary-color border-primary-color border">
              <CiHeart className="text-primary-color size-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] m-auto">
        <h2 className="text-3xl mt-10 mb-5 font-semibold text-center">
          Releted Products
        </h2>
        <div className="flex flex-wrap mb-10">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              img={product.mainImage}
              id={product._id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
