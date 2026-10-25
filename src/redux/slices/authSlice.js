import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");
const storedDetails = localStorage.getItem("userDetails");
let userDetails = null;

if (storedDetails) {
    try {
        userDetails = JSON.parse(storedDetails);
    } catch (error) {
        console.error("Unable to restore saved user details.", error);
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: storedUser,
        userDetails
    },
    reducers: {
         login: (state, action) => {
            state.user = action.payload
         },
         logout : (state) => {
            state.user = null
            state.userDetails = null
         },
         setUserDetails: (state, action) => {
            state.userDetails = action.payload
         }
    }
})

export const {login, logout , setUserDetails} = authSlice.actions

export default authSlice