import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: {},
  //   productCount: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilterProducts: (state, action) => {
      state.products = action.payload;
    },
    // setProductCount: (state, action) => {
    //   state.productCount = action.payload;
    // },
  },
});

export const getFilteredData = (
  products,
  { minPrice, maxPrice, categories }
) => {
  if (products) {
    // console.log(products);
    let filteredProducts = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    if (categories && categories.length > 0) {
      const categoriesArray = categories.split(",");
      filteredProducts = filteredProducts.filter((product) =>
        categoriesArray.includes(product.category)
      );
    }

    return filteredProducts;
  }
};

export const { setFilterProducts } = productSlice.actions;
export default productSlice.reducer;
