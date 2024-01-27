import React from "react";
import Product from "../home/Product";
import Filter from "./Filter";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { IoGridOutline } from "react-icons/io5";

function ProductListing() {
  return (
    <div>
      <div className="max-w-[1400px] m-auto flex">
        <div className="hidden lg:block min-w-56 bg-violate h-fit">
          <Filter
            title="Filter By Category"
            items={["Men", "Women", "Kids", "Bags"]}
          />
          <Filter
            title="Filter By Price"
            items={["Electronics", "Men", "Women", "Home & Furniture", "Books"]}
          />
          <Filter
            title="Filter By Size"
            items={["Electronics", "Men", "Women", "Home & Furniture", "Books"]}
          />
        </div>
        <div>
          <div className="flex justify-between px-9">
            <div className="flex gap-5 mb-3">
              <IoGridOutline className="size-7" />
              <TfiLayoutListThumb className="size-7" />
              <span>Showing 1—16 of 72 results</span>
            </div>
            <div>Sort By</div>
          </div>
          <div className="flex flex-wrap">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
