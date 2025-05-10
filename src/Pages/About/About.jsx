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
      <div className="flex gap-3 mt-5 container px-4">
        <button onClick={() => navigate("/")} className="text-gray-400">Home</button>
        <span>/</span>
        <button className="font-medium">About</button>
      </div>

      <div className="flex flex-col md:flex-row my-5 gap-5 px-4">
        <div className="w-full md:w-1/2 flex justify-center flex-col">
          <h1 className="mb-5 text-2xl md:text-3xl">Our Story</h1>
          <p className="text-sm md:text-base">
            Launced in 2015, Exclusive is South Asia's premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-sm md:text-base">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={rightSide} className="w-full h-auto" />
        </div>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-5">
        <div className="flex flex-col border-1 border-gray-500 rounded items-center justify-center gap-3 hover:bg-red-600 hover:text-white p-4">
            <img src={services} className="w-12 h-12"/>
            <h1 className="text-xl font-bold">10.5k </h1>
            <p className="text-sm text-center">Sallers active our site</p>
        </div>
        <div className="flex flex-col border-1 border-gray-500 rounded items-center justify-center gap-3 hover:bg-red-600 hover:text-white p-4">
            <img src={saleRange} className="w-12 h-12 bg-gray-500 rounded-full"/>
            <h1 className="text-xl font-bold">33k</h1>
            <p className="text-sm text-center">Mopnthly Produduct Sale</p>
        </div>
        <div className="flex flex-col border-1 border-gray-500 rounded items-center justify-center gap-3 hover:bg-red-600 hover:text-white p-4">
            <img src={activeCustomers} className="w-12 h-12"/>
            <h1 className="text-xl font-bold">45.5k</h1>
            <p className="text-sm text-center">Customer active in our site</p>
        </div>
        <div className="flex flex-col border-1 border-gray-500 rounded items-center justify-center gap-3 hover:bg-red-600 hover:text-white p-4">
            <img src={money} className="w-12 h-12"/>
            <h1 className="text-xl font-bold">25k </h1>
            <p className="text-sm text-center">Anual gross sale in our site</p>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-12">
        <div className="card border-0 text-center">
            <img src={owner1} className="w-full max-w-[300px] mx-auto" />
            <h2 className="mt-3 text-xl font-bold">Tom Cruise</h2>
            <p className="text-sm">Founder & Chairman</p>
            <div className="flex gap-3 justify-center mt-2">
                <img src={IconTwitter} className="w-5 h-5" />
                <img src={iconInstagram} className="w-5 h-5" />
                <img src={iconLinkedin} className="w-5 h-5" />
            </div>
        </div>
        <div className="card border-0 text-center">
            <img src={owner2} className="w-full max-w-[300px] mx-auto" />
            <h2 className="mt-3 text-xl font-bold">Emma Watson</h2>
            <p className="text-sm">Managing Director</p>
            <div className="flex gap-3 justify-center mt-2">
                <img src={IconTwitter} className="w-5 h-5" />
                <img src={iconInstagram} className="w-5 h-5" />
                <img src={iconLinkedin} className="w-5 h-5" />
            </div>
        </div>
        <div className="card border-0 text-center">
            <img src={owner3} className="w-full max-w-[300px] mx-auto" />
            <h2 className="mt-3 text-xl font-bold">Will Smith</h2>
            <p className="text-sm">Product Designer</p>
            <div className="flex gap-3 justify-center mt-2">
                <img src={IconTwitter} className="w-5 h-5" />
                <img src={iconInstagram} className="w-5 h-5" />
                <img src={iconLinkedin} className="w-5 h-5" />
            </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-12">
        <div className="flex flex-col items-center text-center">
            <img src={bus} className="w-16 h-16 mb-4" />
            <h5 className="font-bold text-lg">FREE AND FAST DELIVERY</h5>
            <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center text-center">
            <img src={headphone} className="w-16 h-16 mb-4" />
            <h5 className="font-bold text-lg">24/7 CUSTOMER SERVICE</h5>
            <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center text-center">
            <img src={moneyBack} className="w-16 h-16 mb-4" />
            <h5 className="font-bold text-lg">MONEY BACK GUARANTEE</h5>
            <p className="text-sm">We reurn money within 30 days</p>
        </div>
      </div>
    </>
  );
}

export default About;
