import React, { useEffect, useState } from "react";
import Product from "../home/Product";
import Filter from "./Filter";
import { useGetListingProductQuery } from "../../redux/api/productApi";
import { useGetAllCategoriesQuery } from "../../redux/api/categoryApi";
import { useSearchParams } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

function ProductListing() {
  const [products, setProducts] = useState();
  const [isFilterVisible, setisFilterVisible] = useState(false);
  const { data: categoryData } = useGetAllCategoriesQuery();
  const { data: productsData } = useGetListingProductQuery({
    page: 1,
    limit: 100,
  });

  let screenWidth = window.innerWidth;
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  // if (screenWidth > 767) {
  //   setisFilterVisible(true);
  // }

  useEffect(() => {
    setProducts(productsData?.data?.products);
  }, [productsData]);

  const [searchParams] = useSearchParams();
  useEffect(() => {
    console.log("Query parameters:", Object.fromEntries(searchParams));
    const params = Object.fromEntries(searchParams);
    const categories = params.category ? params.category.split(",") : [];

    if (categories.length === 0) {
      setProducts(productsData?.data?.products);
    }

    const fetchProductsPromises = categories.map((categoryId) => {
      return fetchProductsByCategory(categoryId);
    });

    Promise.all(fetchProductsPromises).then((productsByCategory) => {
      let combinedProducts = productsByCategory.flat();
      if (combinedProducts.length === 0) {
        combinedProducts = productsData?.data?.products;
      }
      console.log("comb", combinedProducts);
      const filteredProducts = priceFilter(
        combinedProducts,
        params.minPrice,
        params.maxPrice
      );
      console.log("fil", filteredProducts);
      if (filteredProducts?.length !== 0) {
        console.log(filteredProducts);
        setProducts(filteredProducts);
      }
    });
  }, [searchParams]);

  const priceFilter = (product, minPrice, maxPrice) => {
    const filteredProducts = product.filter((product) => {
      return product.price >= minPrice && product.price <= maxPrice;
    });
    return filteredProducts;
  };

  const fetchProductsByCategory = async (categoryId) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/ecommerce/products/category/${categoryId}`
    );

    const data = await response.json();
    return data.data.products;
  };

  return (
    <div className="max-w-[1300px] m-auto">
      <p className="md:hidden px-5 text-xl mb-2">Filter</p>
      <div className=" flex mb-5 justify-evenly ">
        <div className="absolute md:static top-16 left-0 z-10 bg-white md:block min-w-56 bg-violate h-fit">
          <div className="flex justify-end px-3 md:hidden">
            <IoCloseSharp className="size-5" />
          </div>
          <Filter
            title="Filter By Category"
            items={categoryData?.data?.categories}
          />
          {/* {isFilterVisible ? (
          ) : null} */}
        </div>
        <div>
          <div className="px-5 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
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
