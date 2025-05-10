import { useDispatch, useSelector } from "react-redux";
import React, { useContext } from "react";
import ThemeContext from "../../Contexts/StatesContext";
import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import isEmpty from "../../assets/Images/empty.png";
import { clearCart } from "../../redux/slices/cartSlice";

function Cart() {
  const { Cartproducts } = useSelector((state) => state.cart);
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const continueShoping = () => {
    navigation("/products");
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {Cartproducts.length === 0 ? (
        <div className="flex flex-col sm:flex-row justify-center items-center min-h-[60vh] my-auto">
          <img src={isEmpty} className="w-32 sm:w-35 px-4" alt="Empty cart" />
          <h1 className="opacity-90 text-danger text-center sm:text-left">Your cart is empty</h1>
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="mt-10 sm:mt-20">
            <ul className="flex gap-3 pb-8 sm:pb-15 ps-0">
              <li>
                <NavLink
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-black opacity-50"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>/</li>
              <li>
                <NavLink
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-black opacity-50"
                  }
                >
                  Cart
                </NavLink>
              </li>
            </ul>

            <div className="overflow-x-auto">
              <ul className="flex justify-between shadow-sm mb-5 text-center p-0 min-w-[600px]">
                <li className="py-4 w-1/4 flex justify-center sm:justify-start sm:ps-12">Product</li>
                <li className="p-4 w-1/4">Price</li>
                <li className="p-4 w-1/4">Quantity</li>
                <li className="p-4 w-1/4">Subtotal</li>
              </ul>
            </div>
          </div>

          {Cartproducts.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={() => continueShoping()}
              className="border rounded border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 text-sm px-5 py-2.5 text-center"
            >
              Return to Shop
            </button>
            <button 
              onClick={()=>clearCartItems()} 
              className="border rounded border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 text-sm px-5 py-2.5 text-center"
            >
              Clear Cart
            </button>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mt-5 gap-8">
            <div className="flex flex-col sm:flex-row w-full lg:w-1/2 gap-3">
              <input
                type="text"
                placeholder="Coupon code"
                className="px-4 py-3 w-full sm:w-1/2 border border-gray-300 focus:outline-none rounded"
              />
              <button className="border md:h-20 bg-red-600 rounded border-gray-300 text-white hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-200 text-sm px-5 py-2.5 text-center">
                Apply Coupon
              </button>
            </div>
            <div className="w-full lg:w-1/2 rounded-lg border-1 p-4">
              <p className="text-xl mb-5">Cart Total</p>
              <div className="flex justify-between py-2 border-b-1 border-gray-300">
                <p className="m-0 text-sm">Subtotal:</p>
                <p className="m-0 text-sm">
                  $
                  {Cartproducts.reduce(
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
              <div className="flex justify-between py-2 border-b-1 border-gray-300">
                <p className="m-0 text-sm">Total:</p>
                <p className="m-0 text-sm">
                  $
                  {Cartproducts.reduce(
                    (total, product) =>
                      total + product.price * product.cartQuantity,
                    0
                  )}
                </p>
              </div>
              <div className="flex justify-center">
                <button 
                  onClick={() => navigation("/checkout")} 
                  className="border mt-4 bg-red-600 rounded border-gray-300 text-white hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-200 text-sm px-5 py-2.5 text-center w-full sm:w-auto"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
