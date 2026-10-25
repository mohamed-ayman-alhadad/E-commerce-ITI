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
      const availableQuantity = Number(action.payload.quantity);

      if (existingProduct) {
        if (
          Number.isFinite(availableQuantity) &&
          availableQuantity >= 0 &&
          existingProduct.cartQuantity >= availableQuantity
        ) return;
        existingProduct.cartQuantity += 1;
      } else {
        if (Number.isFinite(availableQuantity) && availableQuantity <= 0) return;
        state.Cartproducts.push({ ...action.payload, cartQuantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const product = state.Cartproducts.find(
        (item) => item.id === action.payload.id
      );
      if (!product) return;

      state.Cartproducts = state.Cartproducts.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalQuantity -= product.cartQuantity;
      state.totalPrice -= product.price * product.cartQuantity;
      if (state.totalQuantity <= 0) {
        state.totalQuantity = 0;
        state.totalPrice = 0;
      }
    },
    increment: (state, action) => {
      const product = state.Cartproducts.find(
        (p) => p.id === action.payload.id
      );
      if (product) {
        const availableQuantity = Number(product.quantity);
        if (
          Number.isFinite(availableQuantity) &&
          availableQuantity >= 0 &&
          product.cartQuantity >= availableQuantity
        ) return;
        product.cartQuantity += 1;
        state.totalPrice += product.price;
        state.totalQuantity += 1;
      }
      
    },

    decrement: (state, action) => {
      const product = state.Cartproducts.find(
        (p) => p.id === action.payload.id
      );
      if (product && product.cartQuantity >1) {
        product.cartQuantity -= 1;
        state.totalPrice -= product.price;
        state.totalQuantity -= 1;
      }
    },
    addToCartQuantity: (state, action) => {
      const { product: item, quantity } = action.payload;
      const requestedAmount = Math.max(1, Number(quantity) || 1);
      const existingProduct = state.Cartproducts.find(
        (product) => product.id === item.id
      );
      const availableQuantity = Number(item.quantity);
      const currentQuantity = existingProduct?.cartQuantity || 0;
      const amount =
        Number.isFinite(availableQuantity) && availableQuantity >= 0
          ? Math.min(requestedAmount, availableQuantity - currentQuantity)
          : requestedAmount;

      if (amount < 1) return;

      if (existingProduct) {
        existingProduct.cartQuantity += amount;
      } else {
        state.Cartproducts.push({ ...item, cartQuantity: amount });
      }

      state.totalQuantity += amount;
      state.totalPrice += item.price * amount;
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
  addToCartQuantity,
  removeFromCart,
  increment,
  decrement,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
