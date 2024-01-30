import React, { useEffect, useState } from "react";
import Product from "../home/Product";
import Filter from "./Filter";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { IoGridOutline } from "react-icons/io5";
import { useGetListingProductQuery } from "../../redux/api/productApi";
import { useGetAllCategoriesQuery } from "../../redux/api/categoryApi";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilterProducts } from "../../redux/filterSlice";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState([10, 1000]);
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: productsData } = useGetListingProductQuery({
    page: 1,
    limit: 100,
  });  


  const { data: categoryData } = useGetAllCategoriesQuery();
  useEffect(() => {
    setProducts(productsData?.data?.products || []);
  }, [productsData]);

  

  const searchParamsObject = Object.fromEntries(searchParams);
  useEffect(() => {
    const delay = setTimeout(() => {
      setSearchParams(() => ({
        ...searchParamsObject,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
      }));
    }, 500);

    return () => clearTimeout(delay);
  }, [searchParams, priceRange]);

  return (
    <div>
      <div className="max-w-[1300px] m-auto flex my -5">
        <div className="hidden lg:block min-w-56 bg-violate h-fit">
          <Filter
            title="Filter By Category"
            items={categoryData?.data?.categories}
          />
          <div className="p-3 text-primary-color">
            <p className="mb-4">
              price: ${priceRange[0]} - {priceRange[1]}
            </p>
            <RangeSlider
              name="priceRange"
              min={10}
              max={2000}
              step={10}
              defaultValue={priceRange}
              value={priceRange}
              onInput={(value) => {
                setPriceRange(value);
              }}
              
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between px-9">
            <div className="flex gap-5 mb-3">
              <IoGridOutline className="size-6" />
              <TfiLayoutListThumb className="size-6" />
              <span>Showing 1—16 of 72 results</span>
            </div>
            <div>Sort By</div>
          </div>
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
      </div>
    </div>
  );
}

export default ProductListing;
