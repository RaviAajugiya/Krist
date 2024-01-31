import React, { useEffect, useState } from "react";
import Product from "../home/Product";
import Filter from "./Filter";
import { useGetListingProductQuery } from "../../redux/api/productApi";
import { useGetAllCategoriesQuery } from "../../redux/api/categoryApi";


function ProductListing() {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([10, 20000]);
  const { data: categoryData } = useGetAllCategoriesQuery();

  const { data: productsData } = useGetListingProductQuery({
    page: 1,
    limit: 100,
  });


  return (
    <div>
      <div className="max-w-[1300px] m-auto flex my-5 justify-evenly">
        <div className="hidden lg:block min-w-56 bg-violate h-fit">
          <Filter
            title="Filter By Category"
            items={categoryData?.data?.categories}
          />
          
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
