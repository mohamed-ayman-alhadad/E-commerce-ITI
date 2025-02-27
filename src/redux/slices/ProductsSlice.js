import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../Utils/axiosInstance";

const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const res = await instance.get("/products");
    console.log(res.data);

    return res.data.data;
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isFav: false,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload.map((product) => ({
          ...product,
          cartQuantity: 0,
        }));
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
  },
});
export { fetchAllProducts };
export const { setProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
