import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/ChechoutProduct/CheckoutProduct";
import payments from "../../assets/Images/payments.png";

export default function CheckOut() {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.Cartproducts);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [orderNotice, setOrderNotice] = useState("");
  const subtotal = cartProducts.reduce(
    (total, product) => total + product.price * product.cartQuantity,
    0
  );

  if (cartProducts.length === 0) {
    return (
      <section className="page-container flex min-h-[55vh] flex-col items-center justify-center py-16 text-center">
        <p className="eyebrow">Checkout</p>
        <h1 className="section-heading mt-1">Your cart is empty</h1>
        <p className="mt-2 text-gray-600">Add something to your cart before checking out.</p>
        <Link to="/products" className="primary-action mt-5">Explore products</Link>
      </section>
    );
  }

  return (
    <div className="page-container py-10">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
        <Link to="/" className="text-inherit no-underline hover:underline">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link to="/cart" className="text-inherit no-underline hover:underline">Cart</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-gray-900">Checkout</span>
      </nav>

      <div className="mb-8">
        <p className="eyebrow mb-2">Almost yours</p>
        <h1 className="section-heading">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <section aria-labelledby="billing-title">
          <h2 id="billing-title" className="mb-5 text-xl font-semibold">Billing details</h2>
          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
            <label className="text-sm text-gray-600 sm:col-span-2">
              Full name <span className="text-red-700">*</span>
              <input type="text" name="name" required autoComplete="name" className="mt-2 min-h-12 w-full rounded border border-gray-300 px-3 text-gray-900" />
            </label>
            <label className="text-sm text-gray-600 sm:col-span-2">
              Street address <span className="text-red-700">*</span>
              <input type="text" name="address" required autoComplete="street-address" className="mt-2 min-h-12 w-full rounded border border-gray-300 px-3 text-gray-900" />
            </label>
            <label className="text-sm text-gray-600">
              Apartment, floor, etc.
              <input type="text" name="apartment" autoComplete="address-line2" className="mt-2 min-h-12 w-full rounded border border-gray-300 px-3 text-gray-900" />
            </label>
            <label className="text-sm text-gray-600">
              Town / city <span className="text-red-700">*</span>
              <input type="text" name="city" required autoComplete="address-level2" className="mt-2 min-h-12 w-full rounded border border-gray-300 px-3 text-gray-900" />
            </label>
            <label className="text-sm text-gray-600">
              Phone number <span className="text-red-700">*</span>
              <input type="tel" name="phone" required autoComplete="tel" className="mt-2 min-h-12 w-full rounded border border-gray-300 px-3 text-gray-900" />
            </label>
            <label className="text-sm text-gray-600">
              Email address <span className="text-red-700">*</span>
              <input type="email" name="email" required autoComplete="email" className="mt-2 min-h-12 w-full rounded border border-gray-300 px-3 text-gray-900" />
            </label>
          </form>
        </section>

        <aside className="h-fit rounded-lg border border-gray-300 p-5 sm:p-6" aria-labelledby="order-summary-title">
          <h2 id="order-summary-title" className="text-xl font-semibold">Your order</h2>
          <div className="my-5 space-y-4">
            {cartProducts.map((product) => (
              <CheckoutProduct key={product.id} product={product} />
            ))}
          </div>

          <div className="mb-5 space-y-3 border-y border-gray-200 py-4 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between gap-3 text-base">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
          </div>

          <fieldset className="mb-5 space-y-3">
            <legend className="mb-2 text-sm font-semibold">Payment method</legend>
            <label className="flex cursor-pointer items-center justify-between gap-3 rounded border border-gray-200 p-3">
              <span className="flex items-center gap-3 text-sm">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                  className="accent-red-700"
                />
                Bank transfer
              </span>
              <img src={payments} alt="Available bank card brands" className="h-6 w-auto" />
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded border border-gray-200 p-3 text-sm">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
                className="accent-red-700"
              />
              Cash on delivery
            </label>
          </fieldset>

          <p className="mb-4 text-xs leading-5 text-gray-500">
            Order placement is not connected to a backend yet. Your cart will not be submitted.
          </p>
          <button
            type="button"
            onClick={() => setOrderNotice("Order placement is unavailable. Your cart has not been submitted.")}
            className="primary-action w-full"
          >
            Place order
          </button>
          {orderNotice && <p className="mt-3 text-sm text-red-700" role="alert">{orderNotice}</p>}
          <button type="button" onClick={() => navigate("/cart")} className="mt-4 w-full text-sm text-gray-600 underline underline-offset-4">
            Return to cart
          </button>
        </aside>
      </div>
    </div>
  );
}
