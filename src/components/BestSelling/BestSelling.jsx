import { useQuery } from '@tanstack/react-query'
import React from 'react'
import instance from '../../Utils/axiosInstance'
import Card from '../Card/ProductCard';
import LeftArrow from "../../assets/Images/LeftArrow.png";
import RightArrow from "../../assets/Images/RightArrow.png";
import { useNavigate } from 'react-router-dom';

export default function BestSelling() {
    const {data, isLoading, error} = useQuery({
        queryKey: ['bestSelling'],
        queryFn: async()=>{
            const res = await instance.get('/products?page=1');
            return res.data.data;
        }
    })
    const navigate = useNavigate();
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
           <p className="ms-2 text-red-700 mb-0 mt-2">This Month</p>
         </div>
         <div className="container flex mb-4">
           <div className="flex items-center justify-between w-50">
             <h2 className="font-bold m-0">Best Selling Products</h2>
             
           </div>
           <div className="flex w-50 justify-end gap-2">
              <button onClick={() => navigate("/products")} className='bg-red-600 px-4 py-2 text-white hover:bg-red-800 rounded'>View All</button>
           </div>
         </div>
         <div className='flex gap-5 container justify-center mb-5'>
         {isLoading &&<div className="container  "> <div className=" h-56 flex items-center justify-center rounded-lg  ">
          <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            loading...
          </div>
          </div>
        </div>}
        <div className='flex flex-wrap gap-4 justify-center'>
            {data?.map((item , index) => {
                if(index < 4){
                    return <Card key={item.id} name={item.title} price={item.price} image={item.imageCover} id={item.id} product={item} added={item.added} />
                }
            })}
            </div>
         </div>
   </>
  )
}
