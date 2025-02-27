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
      <div className="d-flex flex-wrap container  p-0 mb-5 ">
        <SideBar />
        <Main />
      </div>
      <FlashSales />
      <Categories />
      <BestSelling />
      <img src={background} className="container pt-5" />
      <Featured />
      <div className="container flex justify-around mt-50">
        <div className="flex flex-col items-center">
          <img src={bus} className="w-18 h-18 mb-4" />
          <h5 className="font-bold">FREE AND FAST DELIVERY</h5>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={headphone} className="w-18 h-18 mb-4" />
          <h5 className="font-bold">24/7 CUSTOMER SERVICE</h5>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={moneyBack} className="w-18 h-18 mb-4" />
          <h5 className="font-bold">MONEY BACK GUARANTEE</h5>
          <p className="text-sm">We reurn money within 30 days</p>
        </div>
      </div>
    </>
  );
}

export default Home;
