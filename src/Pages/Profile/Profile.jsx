import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
//   const userDetails = useSelector((state) => state.auth.userDetails);
//   console.log(userDetails);
const userDetails = JSON.parse(localStorage.getItem("userDetails"));
console.log(userDetails);

  
  return (
    <div className="container">
        <div className="flex justify-between items-center">
      <div className="flex gap-3 my-5 ">
        <button onClick={() => navigate("/")} className="text-gray-400">
          Home
        </button>
        <span>/</span>
        <button className="font-medium">My Account</button>
      </div>
      <div>
        <span>Welcome!</span>
        <span className="text-red-600">{userDetails.name}</span>
      </div>
      </div>
      <div className="w-100 flex gap-4">
        <div className="w-25 p-4 ">
          <p className="font-medium">Manage My Account</p>
          <ul className=" ">
            <li className="my-2 text-red-500">My Account</li>
            <li className="my-2 text-gray-400">Address Book</li>
            <li className="my-2 text-gray-400">My Payment Options</li>
          </ul>
          <p className="font-medium">My Orders</p>
          <ul className=" ">
            <li className="my-2 text-gray-400">My Returns</li>
            <li className="my-2 text-gray-400">My Cancellations</li>
          </ul>
          <p className="font-medium">My Wishlist</p>
        </div>
        <div className="w-75 px-5 py-4 shadow-sm">
          <p className="fs-2 font-medium text-red-600">Edit Your Profile</p>
          <div className="flex justify-between gap-5 mb-5">
            <div className="w-50">
              <label
                htmlFor="fName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="fName"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder={userDetails?.name}
              />
            </div>
            <div className="w-50">
              <label
                htmlFor="fName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                id="fName"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder={userDetails?.name}
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 mb-5">
            <div className="w-50">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder={userDetails?.email}
              />
            </div>
            <div className="w-50">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder="Tanta, Egypt"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password Changes
            </label>
            <input
              type="text"
              id="text"
              className="shadow-xs mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="Current Password"
            />
             <input
              type="text"
              id="text"
              className="shadow-xs mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="New Password"
            />
             <input
              type="text"
              id="text"
              className="shadow-xs mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button>Cancle</button>
            <button className="bg-red-600 text-white px-4 py-3 hover:bg-red-800 rounded-2">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
