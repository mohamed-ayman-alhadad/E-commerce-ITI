import React from "react";
import { useState } from "react";
import style from "./About.module.css";
import rightSide from "../../assets/Images/rightSide.png";
import { useNavigate } from "react-router-dom";
import services from "../../assets/Images/Services.png";
import saleRange from "../../assets/Images/saleRange.png";
import activeCustomers from "../../assets/Images/activeCustomers.png";
import money from "../../assets/Images/money.png";
import owner1 from "../../assets/Images/owner1.png";
import owner2 from "../../assets/Images/owner2.png";
import owner3 from "../../assets/Images/owner3.png";
import IconTwitter from "../../assets/Images/Icon-Twitter.png";
import iconInstagram from "../../assets/Images/icon-Instagram.png";
import iconLinkedin from "../../assets/Images/icon-Linkedin.png"; 
import moneyBack from "../../assets/Images/moneyBack.png";
import bus from "../../assets/Images/Services (1).png";
import headphone from "../../assets/Images/headphone.png";
function About() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-3 mt-5 container">
        <button onClick={() => navigate("/")} className="text-gray-400">Home</button>
        <span>/</span>
        <button className="font-medium">About</button>
      </div>

      <div className="flex my-5 gap-5 ">
        <div className="w-50 flex justify-center flex-col mx-5 ps-15">
          <h1 className="mb-5">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-50">
          <img src={rightSide} />
        </div>
      </div>
      <div className="container flex gap-4 justify-center mb-5">
        <div className="flex flex-col border-1 border-gray-500 rounded items-center justify-center gap-3  hover:bg-red-600 hover:text-white" style={{ width: "270px", height: "230px" }}>
            <img  src={services} className="w-15 h-15"/>
            <h1>10.5k </h1>
            <p className="text-sm">Sallers active our site</p>
        </div>
        <div className="flex flex-col  border-1 border-gray-500 rounded items-center justify-center gap-3  hover:bg-red-600 hover:text-white" style={{ width: "270px", height: "230px" }}>
            <img  src={saleRange} className="w-15 h-15 bg-gray-500 rounded-full"/>
            <h1>33k</h1>
            <p className="text-sm">Mopnthly Produduct Sale</p>
        </div>
        <div className="flex flex-col border-1 border-gray-500 rounded items-center justify-center gap-3  hover:bg-red-600 hover:text-white" style={{ width: "270px", height: "230px" }}>
            <img  src={activeCustomers} className="w-15 h-15"/>
            <h1>45.5k</h1>
            <p className="text-sm">Customer active in our site</p>
        </div>
        <div className="flex flex-col border-1 border-gray-500 rounded items-center justify-center gap-3 hover:bg-red-600 hover:text-white" style={{ width: "270px", height: "230px" }}>
            <img  src={money} className="w-15 h-15"/>
            <h1>25k </h1>
            <p className="text-sm">Anual gross sale in our site</p>
        </div>




      </div>

      <div className="container flex gap-4 justify-center mb-50">
        <div className="card border-0">
            <img src={owner1} className="" />
            <h2 className="mt-3">Tom Cruise</h2>
            <p className="text-sm">Founder & Chairman</p>
            <div className="flex gap-3">
                <img src={IconTwitter} className="w-5 h-5" />
                <img src={iconInstagram} className="w-5 h-5" />
                <img src={iconLinkedin} className="w-5 h-5" />
            </div>
        </div>
        <div className="card border-0">
            <img src={owner2} className="" />
            <h2 className="mt-3">Emma Watson</h2>
            <p className="text-sm">Managing Director</p>
            <div className="flex gap-3">
                <img src={IconTwitter} className="w-5 h-5" />
                <img src={iconInstagram} className="w-5 h-5" />
                <img src={iconLinkedin} className="w-5 h-5" />
            </div>
        </div>
        <div className="card border-0">
            <img src={owner3} className="" />
            <h2 className="mt-3">Will Smith</h2>
            <p className="text-sm">Product Designer</p>
            <div className="flex gap-3">
                <img src={IconTwitter} className="w-5 h-5" />
                <img src={iconInstagram} className="w-5 h-5" />
                <img src={iconLinkedin} className="w-5 h-5" />
            </div>
        </div>
      </div>

      <div className="container flex justify-around mt-80">
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

export default About;
