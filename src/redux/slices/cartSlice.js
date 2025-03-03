import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    Cartproducts: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    
    addToCart: (state, action) => {
      const existingProduct = state.Cartproducts.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.cartQuantity += 1;
      } else {
        state.Cartproducts.push({ ...action.payload, cartQuantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.Cartproducts = state.Cartproducts.filter(
        (product) => product.id !== action.payload.id
      );

      state.totalQuantity = state.totalQuantity -action.payload.cartQuantity;
    },
    increment: (state, action) => {
      const product = state.Cartproducts.find(
        (p) => p.id === action.payload.id
      );
      if (product) {
        product.cartQuantity += 1;
        state.totalPrice += product.price;
        state.totalQuantity += 1;
      console.log("0000", product);

      }
      
    },

    decrement: (state, action) => {
      const product = state.Cartproducts.find(
        (p) => p.id === action.payload.id
      );
      if (product && product.cartQuantity > 0) {
        product.cartQuantity -= 1;
        state.totalPrice -= product.price;
        state.totalQuantity -= 1;
      }
    },
    clearCart: (state) => {
      state.Cartproducts = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
     
    
  },
});

export const {
  addToCart,
  removeFromCart,
  increment,
  decrement,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
