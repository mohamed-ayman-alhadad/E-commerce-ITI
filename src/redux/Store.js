import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"
import ProductsReducer from "./slices/ProductsSlice"
import favReducer from "./slices/favSlice"
import authReducer from "./slices/authSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products : ProductsReducer,
        Fav : favReducer,
        auth : authReducer.reducer
    }
})