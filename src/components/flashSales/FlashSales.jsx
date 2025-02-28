import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "../Card/ProductCard";
import instance from "../../Utils/axiosInstance";
import LeftArrow from "../../assets/Images/LeftArrow.png";
import RightArrow from "../../assets/Images/RightArrow.png";
import { useNavigate } from "react-router-dom";
export default function FlashSales() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["flashSales"],
    queryFn: async () => {
      const res = await instance.get("/products?page=2");
      return res.data.data;
    },
  });
  console.log(data);

  const navigate = useNavigate();

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
                <h2>03</h2>
            </div>
            <h2 className="font-bold text-danger ">:</h2>
            <div className="flex flex-col items-center gap-1">
                <p className="text-xs m-0 ">Hours</p>
                <h2>23</h2>
            </div>
            <h2 className="font-bold text-danger ">:</h2>
            <div className="flex flex-col items-center gap-1">
                <p className="text-xs m-0 ">Minutes</p>
                <h2>19</h2>
            </div>
            <h2 className="font-bold text-danger">:</h2>
            <div className="flex flex-col items-center gap-1">
                <p className="text-xs m-0 ">Seconds</p>
                <h2>56</h2>
            </div>
        </div>
        </div>
        <div className="flex w-50 justify-end gap-2">
            <img src={LeftArrow} alt="left" className="w-10 h-10" />
            <img src={RightArrow} alt="right" className="w-10 h-10"/>
        </div>

         </div>
      <div
        className="flex container justify-center overflow-x-scroll "
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-4 justify-center mb-5">
          {isLoading &&<div className="container  "> <div className=" h-56 flex items-center justify-center rounded-lg  ">
          <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            loading...
          </div>
          </div>
        </div>}

          {data?.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              image={product.imageCover}
              product={product}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center border-b-1 container border-gray-300 pb-5 mb-5">
      <button onClick={() => navigate("/products")} className="text-white  bg-red-600 border-0 py-3 px-6 focus:outline-none hover:bg-red-800 rounded">View All Products</button>
      </div>
    </>
  );
}
