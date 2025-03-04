import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Card from "../Card/ProductCard";
import instance from "../../Utils/axiosInstance";
import LeftArrow from "../../assets/Images/LeftArrow.png";
import RightArrow from "../../assets/Images/RightArrow.png";
import { useNavigate } from "react-router-dom";
export default function FlashSales() {
  const [isFlash, setIsFlash] = useState(true);
  const { data, isLoading, error } = useQuery({
    queryKey: ["flashSales"],
    queryFn: async () => {
      const res = await instance.get("/products?page=2");
      return res.data.data;
    },
  });
  console.log(data);

  const navigate = useNavigate();
  const day = new Date().getDay();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  return (
    <>
      <div className="flex container align-middle mb-4">
        <span
          style={{
            width: "20px",
            height: "40px",
            backgroundColor: "red",
            borderRadius: "20%",
          }}
        ></span>
        <p className="ms-2 text-red-700 mb-0 mt-2">Today's</p>
      </div>
      <div className="container flex mb-4">
        <div className="flex items-center justify-between w-50">
          <h2 className="font-bold m-0">Flash Sales</h2>
          <div className="flex gap-3 items-end d-none d-md-flex  ">
            <div className="flex flex-col items-center gap-1">
              <p className="text-xs m-0 ">Days</p>
              <h2>0{day}</h2>
            </div>
            <h2 className="font-bold text-danger ">:</h2>
            <div className="flex flex-col items-center gap-1">
              <p className="text-xs m-0 ">Hours</p>
              <h2>0{hours}</h2>
            </div>
            <h2 className="font-bold text-danger ">:</h2>
            <div className="flex flex-col items-center gap-1">
              <p className="text-xs m-0 ">Minutes</p>
              <h2>{minutes}</h2>
            </div>
            <h2 className="font-bold text-danger">:</h2>
            <div className="flex flex-col items-center gap-1">
              <p className="text-xs m-0 ">Seconds</p>
              <h2>{seconds}</h2>
            </div>
          </div>
        </div>
        <div className="flex w-50 justify-end gap-2">
          <img src={LeftArrow} alt="left" className="w-10 h-10" />
          <img src={RightArrow} alt="right" className="w-10 h-10" />
        </div>
      </div>
      <div
        className="flex container gap-4 mb-5 py-2  overflow-x-scroll "
        style={{ scrollbarWidth: "none" }}
      >
        {isLoading && (
          <div className="container flex justify-center ">
            {" "}
            <div className=" h-56 flex items-center justify-center rounded-lg  ">
              <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                loading...
              </div>
            </div>
          </div>
        )}

        {data?.map((product) => (
          // <div style={{minWidth:"280px"}}>
          <Card
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            image={product.imageCover}
            product={product}
            isFlash={isFlash}
          />
          // </div>
        ))}
      </div>
      <div className="flex justify-center border-b-1 container border-gray-300 pb-5 mb-5">
        <button
          onClick={() => navigate("/products")}
          className="text-white  bg-red-600 border-0 py-3 px-6 focus:outline-none hover:bg-red-800 rounded"
        >
          View All Products
        </button>
      </div>
    </>
  );
}
