import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        userDetails: null
    },
    reducers: {
         login: (state, action) => {
            state.user = action.payload
         },
         logout : (state) => {
            state.user = null
         },
         setUserDetails: (state, action) => {
            
            state.userDetails = {...action.payload , addres :"Tanta , Egypt"}
         }
    }
})

export const {login, logout , setUserDetails} = authSlice.actions

export default authSlice