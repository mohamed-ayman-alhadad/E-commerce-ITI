import React from "react";
import LeftArrow from "../../assets/Images/LeftArrow.png";
import RightArrow from "../../assets/Images/RightArrow.png";
import { useQuery } from "@tanstack/react-query";
import instance from "../../Utils/axiosInstance";
import CategoryCart from "./CategoryCart";

export default function Categories() {

    const {data, isLoading , error} = useQuery({
        queryKey: ['categories'],
        queryFn: async()=>{
            const res = await instance.get('/categories');
            console.log(res.data,"data"); ;
            
            return res.data.data;
        }
    })
  return (
    <>
      <div className="flex container align-middle mt-5 my-4 ">
        <span
          style={{
            width: "20px",
            height: "40px",
            backgroundColor: "red",
            borderRadius: "20%",
          }}
        ></span>
        <p className="ms-2 text-red-700 mb-0 mt-2">Categories</p>
      </div>
      <div className="container flex mb-4">
        <div className="flex items-center justify-between w-50">
          <h2 className="font-bold m-0">Browse By Category</h2>
          
        </div>
        <div className="flex w-50 justify-end gap-2">
          <img src={LeftArrow} alt="left" className="w-10 h-10" />
          <img src={RightArrow} alt="right" className="w-10 h-10" />
        </div>
      </div>
      <div className="flex container gap-5 overflow-x-scroll  border-b border-gray-300 pb-5 mb-5" style={{scrollbarWidth:"none"}}>
      {isLoading &&<div className="container  "> <div className=" h-56 flex items-center justify-center rounded-lg  ">
          <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            loading...
          </div>
          </div>
        </div>}
      {data?.map((item) => (
        <CategoryCart key={item._id} item={item} />
      ))}
      </div>
    </>
  );
}
