import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
  return (<>
    <div className="container">
         <div className="flex gap-3 my-5 ">
        <button onClick={() => navigate("/")} className="text-gray-400">
          Home
        </button>
        <span>/</span>
        <button className="font-medium">404 Error</button>
      </div>
    </div>
    <div className="container flex flex-col justify-center items-center gap-5 mb-30">
        <h1 style={{fontSize:"90px"}}>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <button onClick={() => navigate("/")} className="bg-red-600 px-4 py-3 text-white hover:bg-red-800 rounded">Back to Home Page</button>
    </div>
    </>
  );
}
