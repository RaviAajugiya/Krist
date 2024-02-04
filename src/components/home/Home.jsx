import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Product from "./Product";
import {
  useGetListingProductQuery,
} from "../../redux/api/productApi";
import Story from "./Story";
import Deals from "./Deals";

function Home() {
  const [products, setProducts] = useState([]);
  const { data: productsData, isLoading } = useGetListingProductQuery({
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    setProducts(productsData?.data?.products || []);
  }, [productsData]);

  return (
    <div className="h-[calc(100vh - 0.5rem)]">
      <Banner />
      <div className="max-w-[1300px] m-auto">
        <h2 className="text-2xl mt-10 text-center md:text-3xl font-semibold mb-8">
          Our Bestseller
        </h2>
        <div className="px-5 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-auto ">
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
        <Deals />
        <Story />
      </div>
    </div>
  );
}

export default Home;
