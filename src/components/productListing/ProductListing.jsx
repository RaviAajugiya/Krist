import React, { useEffect, useState } from "react";
import Product from "../home/Product";
import Filter from "./Filter";
import { useGetListingProductQuery } from "../../redux/api/productApi";
import { useGetAllCategoriesQuery } from "../../redux/api/categoryApi";
import { useSearchParams } from "react-router-dom";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const { data: categoryData } = useGetAllCategoriesQuery();
  const { data: productsData } = useGetListingProductQuery({
    page: 1,
    limit: 100,
  });

  useEffect(() => {
    setProducts(productsData?.data?.products)
    console.log(products);
  }, [productsData])
  
  const [searchParams] = useSearchParams();
  useEffect(() => {
    console.log("Query parameters:", Object.fromEntries(searchParams));
    const params = Object.fromEntries(searchParams);
    const categories = params.category ? params.category.split(",") : []; 
    console.log(categories);
  
    const fetchProductsPromises = categories.map((categoryId) => {
      return fetchProductsByCategory(categoryId);
    });
  
    Promise.all(fetchProductsPromises)
      .then((productsByCategory) => {
        const combinedProducts = productsByCategory.flat();
        console.log(params.minPrice);
        const filteredProducts = combinedProducts.filter(product => {
          return product.price >= params.minprice && product.price <= params.maxprice;
        });
        // console.log("Combined Products:", filteredProducts);
        setProducts(filteredProducts);
      })
  }, [searchParams]);
  
  const fetchProductsByCategory = async (categoryId) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/ecommerce/products/category/${categoryId}`
    );
  
    const data = await response.json();
    return data.data.products;
  };

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
          <div className="px-5 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 mx-auto">
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
