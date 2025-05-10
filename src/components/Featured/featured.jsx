import React from "react";
import Feature1 from "../../assets/Images/Feature1.png";
import Feature2 from "../../assets/Images/Feature2.png";
import Feature3 from "../../assets/Images/Feature3.png";
import Feature4 from "../../assets/Images/Feature4.png";

export default function Featured() {
  return (
    <div>
      <div className="flex container align-middle mt-5 my-4">
        <span
          style={{
            width: "20px",
            height: "40px",
            backgroundColor: "red",
            borderRadius: "20%",
          }}
        ></span>
        <p className="ms-2 text-red-700 mb-0 mt-2">Features</p>
      </div>
      <div className="container flex mb-4">
        <div className="flex items-center justify-between w-full md:w-50">
          <h2 className="font-bold m-0">New Arrival</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-3 container mb-5">
        <div className="w-full md:w-[48.5%] h-auto">
          <img 
            src={Feature1} 
            alt="Feature 1" 
            className="w-full h-auto object-cover"
            style={{ maxHeight: "600px" }}
          />
        </div>
        <div className="flex flex-col w-full md:w-[48.5%] gap-3 h-auto">
          <img 
            src={Feature2} 
            alt="Feature 2" 
            className="w-full h-auto object-cover"
            style={{ maxHeight: "284px" }}
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <img 
              src={Feature3} 
              alt="Feature 3" 
              className="w-full sm:w-1/2 h-auto object-cover"
              style={{ maxHeight: "297px" }}
            />
            <img 
              src={Feature4} 
              alt="Feature 4" 
              className="w-full sm:w-1/2 h-auto object-cover"
              style={{ maxHeight: "297px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
