import { createSlice } from "@reduxjs/toolkit";


const favSlice = createSlice({
    name: "Fav",
    initialState: {
        favProducts: [],
    },
    reducers:{
        addToFavList(state,action){
            state.favProducts.push(action.payload)
        },
        removeFromFavList(state,action){
            state.favProducts = state.favProducts.filter(product => product.id !== action.payload.id)
        }
    }
})
export const {addToFavList,removeFromFavList} = favSlice.actions
export default favSlice.reducer;