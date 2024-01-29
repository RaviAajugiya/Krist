import React, { useEffect, useState } from "react";
import Product from "../home/Product";
import Filter from "./Filter";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { IoGridOutline } from "react-icons/io5";
import { useGetListingProductQuery } from "../../redux/api/productApi";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const { data: productsData } = useGetListingProductQuery({
    page: 1,
    limit: 12,
  });

  useEffect(() => {
    setProducts(productsData?.data?.products || []);
    console.log(products);
  }, [productsData]);

  return (
    <div>
      <div className="max-w-[1300px] m-auto flex my -5">
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
              <IoGridOutline className="size-6" />
              <TfiLayoutListThumb className="size-6" />
              <span>Showing 1—16 of 72 results</span>
            </div>
            <div>Sort By</div>
          </div>
          <div className="flex flex-wrap">
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
