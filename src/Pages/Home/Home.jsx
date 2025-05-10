import React, { useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Main from "../../components/MainContent/Main";
import FlashSales from "../../components/flashSales/FlashSales";
import Categories from "../../components/Categories/Categories";
import BestSelling from "../../components/BestSelling/BestSelling";
import background from "../../assets/Images/background.png";
import Featured from "../../components/Featured/featured";
import moneyBack from "../../assets/Images/moneyBack.png";
import bus from "../../assets/Images/Services (1).png";
import headphone from "../../assets/Images/headphone.png";

function Home() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-1/4">
            <SideBar />
          </div>
          <div className="w-full md:w-3/4">
            <Main />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FlashSales />
        <Categories />
        <BestSelling />
        <img src={background} className="w-full h-auto pt-8" alt="background" />
        <Featured />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-8">
          <div className="flex flex-col items-center text-center p-4">
            <img src={bus} className="w-16 h-16 sm:w-18 sm:h-18 mb-4" alt="delivery" />
            <h5 className="font-bold text-lg mb-2">FREE AND FAST DELIVERY</h5>
            <p className="text-sm text-gray-600">Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <img src={headphone} className="w-16 h-16 sm:w-18 sm:h-18 mb-4" alt="customer service" />
            <h5 className="font-bold text-lg mb-2">24/7 CUSTOMER SERVICE</h5>
            <p className="text-sm text-gray-600">Friendly 24/7 customer support</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <img src={moneyBack} className="w-16 h-16 sm:w-18 sm:h-18 mb-4" alt="money back" />
            <h5 className="font-bold text-lg mb-2">MONEY BACK GUARANTEE</h5>
            <p className="text-sm text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
