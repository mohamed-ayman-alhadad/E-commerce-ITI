import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutProduct from "../../components/ChechoutProduct/CheckoutProduct";
import payments from "../../assets/Images/payments.png";

export default function CheckOut() {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.Cartproducts);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap gap-2 items-center text-sm mb-8">
        <button className="text-gray-400 hover:text-gray-600 transition-colors">Account</button>
        <span className="text-gray-400">/</span>
        <button onClick={() => navigate("/profile")} className="text-gray-400 hover:text-gray-600 transition-colors">
          My Account
        </button>
        <span className="text-gray-400">/</span>
        <button onClick={() => navigate("/products")} className="text-gray-400 hover:text-gray-600 transition-colors">
          Product
        </button>
        <span className="text-gray-400">/</span>
        <button onClick={() => navigate("/cart")} className="text-gray-400 hover:text-gray-600 transition-colors">
          View Cart
        </button>
        <span className="text-gray-400">/</span>
        <button className="font-medium text-gray-900">Check Out</button>
      </div>

      <h1 className="text-2xl font-semibold mb-8">Billing Details</h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Billing Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="fName" className="block text-gray-600 mb-2 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="fName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label htmlFor="cName" className="block text-gray-600 mb-2 text-sm font-medium">
                Company Name
              </label>
              <input
                type="text"
                id="cName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter company name (optional)"
              />
            </div>

            <div>
              <label htmlFor="addrss" className="block text-gray-600 mb-2 text-sm font-medium">
                Street Address
              </label>
              <input
                type="text"
                id="addrss"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter street address"
              />
            </div>

            <div>
              <label htmlFor="apartment" className="block text-gray-600 mb-2 text-sm font-medium">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter apartment details"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-gray-600 mb-2 text-sm font-medium">
                Town/City
              </label>
              <input
                type="text"
                id="city"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter city"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-600 mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-600 mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter email address"
              />
            </div>

            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
              <p className="text-sm text-gray-600">Save this information for next time</p>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            {cartProducts?.map((product) => (
              <CheckoutProduct key={product.id} product={product} />
            ))}
          </div>

          {/* Payment Methods */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" className="w-5 h-5 text-blue-600" />
                <p className="font-medium">Bank Transfer</p>
              </div>
              <img src={payments} alt="Payment methods" className="h-7" />
            </div>

            <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <input type="radio" name="payment" className="w-5 h-5 text-blue-600" />
              <p className="font-medium">Cash on Delivery</p>
            </div>
          </div>

          {/* Order Totals */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between py-2 border-b">
              <p className="text-gray-600">Subtotal:</p>
              <p className="font-medium">
                ${cartProducts.reduce((total, product) => total + product.price * product.cartQuantity, 0).toFixed(2)}
              </p>
            </div>

            <div className="flex justify-between py-2 border-b">
              <p className="text-gray-600">Shipping:</p>
              <p className="font-medium">Free</p>
            </div>

            <div className="flex justify-between py-2 border-b">
              <p className="text-gray-600">Total:</p>
              <p className="font-medium text-lg">
                ${cartProducts.reduce((total, product) => total + product.price * product.cartQuantity, 0).toFixed(2)}
              </p>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Apply
            </button>
          </div>

          {/* Place Order Button */}
          <button className="w-full py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2 font-medium">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
