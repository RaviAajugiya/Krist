import React from "react";
import Product from "../home/Product";
import Filter from "./Filter";

function ProductListing() {
  return (
    <div>
      <div className="px-2 lg:px-32 flex">
        <div className="hidden lg:block min-w-56 bg-violate h-fit">
          <Filter
            title="Category"
            items={["Electronics", "Men", "Women", "Home & Furniture", "Books"]}
          />
          <Filter
            title="Category"
            items={["Electronics", "Men", "Women", "Home & Furniture", "Books"]}
          />
          <Filter
            title="Category"
            items={["Electronics", "Men", "Women", "Home & Furniture", "Books"]}
          />
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
  );
}

export default ProductListing;
