import React from "react";
import { useState , useEffect} from "react";
import style from "./Layout.module.css"
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/ProductsSlice";
import instance from "../../Utils/axiosInstance";

function Layout() {
    
   
    // const dispatch = useDispatch();
    // const { data, isLoading, error } = useQuery({
    //     queryKey: ["products"],
    //     queryFn: async () => {
    //       const res = await instance.get("/products");
    //       console.log();
          
    //       return res.data;
    //     },
    //   });
    
    //   useEffect(() => {
    //     if (data) {
    //       dispatch(setProducts(data));
    //     }
    //   },[data]);
    return <>
        <Header />
        <div className="container-fluid mb-5 p-0" style={{ minHeight: "40vh" }}>
            <Outlet />
        </div>
        <Footer   />
    </>
}

export default Layout;