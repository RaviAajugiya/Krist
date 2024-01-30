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

export const { setFilterProducts } = productSlice.actions;
export default productSlice.reducer;
