import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import isEmpty from "../../assets/Images/empty.png";
import { clearCart } from "../../redux/slices/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart.Cartproducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [couponMessage, setCouponMessage] = useState("");
  const subtotal = products.reduce(
    (total, product) => total + product.price * product.cartQuantity,
    0
  );

  if (products.length === 0) {
    return (
      <section className="page-container flex min-h-[55vh] flex-col items-center justify-center py-16 text-center">
        <img src={isEmpty} className="mb-5 h-28 w-28 object-contain" alt="" />
        <p className="eyebrow">Your bag</p>
        <h1 className="section-heading mt-1">Your cart is waiting</h1>
        <p className="mt-2 max-w-md text-gray-600">Take a look around and find something you love.</p>
        <Link to="/products" className="primary-action mt-5">Continue shopping</Link>
      </section>
    );
  }

  return (
    <div className="page-container py-10">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
        <Link to="/" className="text-inherit no-underline hover:underline">Home</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-gray-900">Shopping cart</span>
      </nav>

      <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow mb-2">Your bag</p>
          <h1 className="section-heading">Shopping cart</h1>
        </div>
        <button
          type="button"
          onClick={() => dispatch(clearCart())}
          className="text-sm text-gray-600 underline underline-offset-4 hover:text-red-700"
        >
          Clear cart
        </button>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(290px,0.8fr)]">
        <section aria-label="Cart items">
          <div className="hidden grid-cols-[minmax(0,2fr)_1fr_1fr_1fr] border-b border-gray-300 pb-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:grid">
            <span>Product</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-right">Subtotal</span>
          </div>
          {products.map((product) => <CartItem key={product.id} product={product} />)}
          <Link to="/products" className="mt-6 inline-flex text-sm font-semibold text-inherit no-underline hover:underline">
            ← Continue shopping
          </Link>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <label htmlFor="coupon-code" className="visually-hidden">Coupon code</label>
            <input
              id="coupon-code"
              type="text"
              placeholder="Coupon code"
              className="min-h-12 flex-1 rounded border border-gray-300 px-4"
              onChange={() => setCouponMessage("")}
            />
            <button
              type="button"
              onClick={() => setCouponMessage("Coupon redemption is not connected yet.")}
              className="min-h-12 rounded border border-gray-300 px-5 text-sm font-semibold hover:bg-gray-50"
            >
              Apply coupon
            </button>
          </div>
          {couponMessage && <p className="mt-2 text-sm text-gray-600" role="status">{couponMessage}</p>}
        </section>

        <aside className="h-fit rounded-lg border border-gray-300 p-5 sm:p-6" aria-labelledby="cart-summary-title">
          <h2 id="cart-summary-title" className="text-lg font-semibold">Order summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between gap-3 border-t border-gray-200 pt-3 text-base">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate("/checkout")}
            className="primary-action mt-6 w-full"
          >
            Continue to checkout
          </button>
          <p className="mt-3 mb-0 text-xs leading-5 text-gray-500">
            Your order total includes free shipping.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Cart;
