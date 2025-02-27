import { useSelector } from "react-redux";
import React, { useContext } from "react";
import ThemeContext from "../../Contexts/StatesContext";
import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import isEmpty from "../../assets/Images/empty.png"
function Cart() {
    const { Cartproducts } = useSelector((state) => state.cart);
    const { theme } = useContext(ThemeContext)
    const navigation = useNavigate()

    const continueShoping = () => {
        navigation("/products")
    }
    return (<div>
        {Cartproducts.length === 0 ? <div className="flex justify-center items-center w-100 h-90 my-auto"><img src={isEmpty} className="w-35 px-4"/>
        <h1 className="opacity-90 text-danger">Your cart is empty</h1>
        </div> :<div className="container ">
            <div className=" mt-20 ">
                <ul className="flex gap-3 pb-15 ps-0">
                    <li><NavLink style={{ textDecoration: "none" }} className={({ isActive }) => isActive ? "text-blue-500" : "text-black opacity-50"} to={"/"}>Home</NavLink></li>
                    <li>/</li>
                    <li><NavLink style={{ textDecoration: "none" }} className={({ isActive }) => isActive ? "text-blue-500" : "text-black opacity-50"} >Cart</NavLink></li>
                </ul>

                <ul className="flex justify-between shadow-sm mb-5 text-center  p-0 ">
                    <li className="py-4  w-25 flex ps-12">Product</li>
                    <li className="p-4 w-25">Price</li>
                    <li className="p-4 w-25">Quantity</li>
                    <li className="p-4 w-25">Subtotal</li>
                </ul>

            </div>
        {Cartproducts.map((product) => <CartItem key={product.id} product={product} />)}
        <div className="flex justify-between ">
            <button onClick={() => continueShoping()} className="border rounded border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  text-sm px-5 py-2.5 text-center">Return to Shop</button>
            <button className="border rounded border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  text-sm px-5 py-2.5 text-center">Update Cart</button>
        </div>

        <div className="flex justify-between mt-5">
            <div className="flex w-50 h-15 gap-3 ">
                <input type="text" placeholder="Coupon code" className="px-4 py-3 w-50 border border-gray-300 focus:outline-none rounded" />
                <button className="border bg-red-600 rounded border-gray-300 text-white hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-200  text-sm px-5 py-2.5 text-center">Apply Coupon</button>
            </div>
            <div className=" w-50 h-80 rounded-lg border-1 p-4 ">
                <p className=" fs-4 mb-5">Cart Total</p>
                <div className="flex justify-between py-2 border-b-1 border-gray-300">
                    <p className="m-0 text-sm">Subtotal:</p>
                    <p className="m-0 text-sm">${Cartproducts.reduce((total, product) => total + product.price* product.cartQuantity, 0)}</p>
                </div>
                <div className="flex justify-between py-2 border-b-1 border-gray-300">
                    <p className="m-0 text-sm">Shipping:</p>
                    <p className="m-0 text-sm">Free</p>
                </div>
                <div className="flex justify-between py-2 border-b-1 border-gray-300">
                    <p className="m-0 text-sm">Total:</p>
                    <p className="m-0 text-sm">${Cartproducts.reduce((total, product) => total + product.price * product.cartQuantity, 0)}</p>
                </div>
                <div className="flex justify-center">
                    <button className="border mt-4  bg-red-600 rounded border-gray-300 text-white hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-200  text-sm px-5 py-2.5 text-center">Checkout</button>
                </div>
            </div>
        </div>
    </div>
}

    </div>);
}

export default Cart;