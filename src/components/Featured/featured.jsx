import React from "react";
import Feature1 from "../../assets/Images/Feature1.png";
import Feature2 from "../../assets/Images/Feature2.png";
import Feature3 from "../../assets/Images/Feature3.png";
import Feature4 from "../../assets/Images/Feature4.png";
export default function Featured() {
  return (
    <div>
      <div className="flex container align-middle mt-5 my-4 ">
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
        <div className="flex items-center justify-between w-50">
          <h2 className="font-bold m-0">New Arrival</h2>
        </div>
         
      </div>
      <div className="flex flex-wrap gap-3 container mb-5 " >
        <div className=" h-100" style={{height:"600px",width:"48.5%" }}>
            <img src={Feature1} alt="" style={{height:"600px",width:"100%" }} />
        </div>
        <div className="flex flex-col w-50  gap-3 h-100 p-0 ">
            <img src={Feature2} alt="" style={{height:"284px",width:"100%" }} />
            <div className="flex gap-3" style={{height:"284px",width:"100%" }}>
                <img src={Feature3} alt="" style={{height:"297px",width:"50%" }} />
                <img src={Feature4} alt="" style={{height:"297px",width:"50%" }} />
            </div>
        </div>

      </div>
    </div>
    
  );
}
