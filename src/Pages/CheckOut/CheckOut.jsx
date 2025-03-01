import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutProduct from "../../components/ChechoutProduct/CheckoutProduct";
import payments from "../../assets/Images/payments.png";

export default function CheckOut() {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.Cartproducts);
  console.log(cartProducts);

  return (
    <div className="container">
      <div className="flex gap-3 my-5 ">
        <button className="text-gray-400">Account</button>
        <span>/</span>
        <button onClick={() => navigate("/profile")} className="text-gray-400">
          My Account
        </button>
        <span>/</span>
        <button onClick={() => navigate("/products")} className="text-gray-400">
          Product
        </button>
        <span>/</span>
        <button onClick={() => navigate("/cart")} className="text-gray-400">
          View Cart
        </button>
        <span>/</span>
        <button className="font-medium">Check Out</button>
      </div>
      <h1 className="mb-4">Billing Details</h1>
      <div className="flex justify-between">
        <div className=" sticky top-0 h-screen overflow-y-auto  " style={{ width: "40%" }}>
          <label
            htmlFor="fName"
            className="block text-gray-400 mb-2 text-sm font-medium  dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="fName"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder=""
          />
          <label
            htmlFor="cName"
            className="block text-gray-400 mb-2 text-sm font-medium dark:text-white"
          >
            Company Name
          </label>
          <input
            type="text"
            id="cName"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder=""
          />
          <label
            htmlFor="addrss"
            className="block text-gray-400 mb-2 text-sm font-medium  dark:text-white"
          >
            Street Address
          </label>
          <input
            type="text"
            id="addrss"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder=""
          />
          <label
            htmlFor="apartment"
            className="block text-gray-400 mb-2 text-sm font-medium  dark:text-white"
          >
            Apartment, floor, etc. (optional)
          </label>
          <input
            type="text"
            id="apartment"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder=""
          />
          <label
            htmlFor="city"
            className="block text-gray-400 mb-2 text-sm font-medium dark:text-white"
          >
            Town/City
          </label>
          <input
            type="text"
            id="city"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder=""
          />
          <label
            htmlFor="phone"
            className="block text-gray-400 mb-2 text-sm font-medium dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder=""
          />
          <label
            htmlFor="email"
            className="block text-gray-400 mb-2 text-sm font-medium  dark:text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder=""
          />
          <div className="flex gap-2 items-center mt-3">
            <input type="checkbox" className="w-4 h-4   " />
            <p className="m-0">Save this information for next time</p>
          </div>
        </div>
        <div className=" "style={{ width: "40%" }}>
          {cartProducts?.map((product) => (
            <CheckoutProduct key={product.id} product={product} />
          ))}

          <div className="flex flex-col w-100">
            <div className="flex justify-between py-2 ">
              <div className="flex items-center gap-2 mb-2">
                <input type="radio" className="w-5 h-5" />
                <p className="m-0">Bank</p>
              </div>
              <img src={payments} alt="" className="w-50 h-7" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <input type="radio" className="w-5 h-5" />
              <p className="m-0">Cash on Delivery</p>
            </div>
            <div className="flex justify-between py-2 border-b-1 border-gray-300">
              <p className="m-0 text-sm">Subtotal:</p>
              <p className="m-0 text-sm">
                $
                {cartProducts.reduce(
                  (total, product) =>
                    total + product.price * product.cartQuantity,
                  0
                )}
              </p>
            </div>

            <div className="flex justify-between py-2 border-b-1 border-gray-300">
              <p className="m-0 text-sm">Shipping:</p>
              <p className="m-0 text-sm">Free</p>
            </div>
            <div className="flex justify-between py-2 border-b-1 mb-4 border-gray-300">
              <p className="m-0 text-sm">Total:</p>
              <p className="m-0 text-sm">
                $
                {cartProducts?.reduce(
                  (total, product) =>
                    total + product.price * product.cartQuantity,
                  0
                )}
              </p>
            </div>
          </div>
          <div className="flex w-100  h-15 gap-3 ">
            <input
              type="text"
              placeholder="Coupon code"
              className="px-4 py-3 w-50 border border-gray-300 focus:outline-none rounded"
            />
            <button className="border w-50 bg-red-600 rounded border-gray-300 text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-200  text-sm px-5 py-2.5 text-center">
              Apply Coupon
            </button>
          </div>
          <button className="border mt-4  bg-red-600 rounded border-gray-300 text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-200  text-sm px-5 py-3 text-center"> 
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
