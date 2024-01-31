import React, { useEffect, useState } from "react";
import Product from "../home/Product";
import Filter from "./Filter";
import { useGetListingProductQuery } from "../../redux/api/productApi";
import { useGetAllCategoriesQuery } from "../../redux/api/categoryApi";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useSearchParams } from "react-router-dom";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([10, 20000]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState();

  const { data: productsData } = useGetListingProductQuery({
    page: 1,
    limit: 100,
  });

  const searchParamsObject = Object.fromEntries(searchParams);

  const { data: categoryData } = useGetAllCategoriesQuery();

  useEffect(() => {
    const urls = searchParamsObject?.categoryId?.split(",");
    console.log(urls);
    const fetchPromises = urls?.map((id) =>
      fetch(
        `http://localhost:8080/api/v1/ecommerce/products/category/${id}`
      ).then((res) => res.json())
    );

    Promise.all(fetchPromises).then((responses) => {
      let data = [];
      responses.map((res) => {
        data = [...data, ...res?.data?.products];
      });
    });
  }, [searchParamsObject]);

  return (
    <div>
      <div className="max-w-[1300px] m-auto flex my-5 justify-evenly">
        <div className="hidden lg:block min-w-56 bg-violate h-fit">
          <Filter
            title="Filter By Category"
            items={categoryData?.data?.categories}
          />
          <div className="p-3 text-primary-color">
            <h3 className="text-lg font-semibold mb-2">Filter by Price</h3>
            <p className="mb-4">
              price: ${priceRange[0]} - {priceRange[1]}
            </p>
            <RangeSlider
              name="priceRange"
              min={10}
              max={20000}
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
          {/* <div className="flex justify-between px-9"> */}
          {/* <div className="flex gap-5 mb-3 justify-end"> */}
          {/* <IoGridOutline className="size-6" /> */}
          {/* <TfiLayoutListThumb className="size-6" /> */}
          {/* <p className="text-right">72 results</p> */}
          {/* </div> */}
          {/* </div> */}
          <div className="px-5 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 mx-auto ">
            {products?.map((product) => (
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
