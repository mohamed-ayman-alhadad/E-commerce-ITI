import React from "react";
import LeftArrow from "../../assets/Images/LeftArrow.png";
import RightArrow from "../../assets/Images/RightArrow.png";
import { useQuery } from "@tanstack/react-query";
import instance from "../../Utils/axiosInstance";
import CategoryCart from "./CategoryCart";

export default function Categories() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await instance.get('/categories');
      return res.data.data;
    }
  });

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex items-center mt-5 my-4">
        <span
          className="w-5 h-10 bg-red-600 rounded"
        ></span>
        <p className="ms-2 text-red-700 mb-0 mt-2">Categories</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <div className="flex items-center">
          <h2 className="font-bold m-0 text-xl sm:text-2xl">Browse By Category</h2>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <img src={LeftArrow} alt="left" className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
          <img src={RightArrow} alt="right" className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {isLoading && (
            <div className="w-full">
              <div className="h-56 flex items-center justify-center rounded-lg">
                <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">
                  loading...
                </div>
              </div>
            </div>
          )}
          
          {data?.map((item) => (
            <div key={item._id} className="min-w-[200px] sm:min-w-[250px]">
              <CategoryCart item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
