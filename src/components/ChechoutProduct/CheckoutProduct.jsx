import React from "react";
import { useSelector } from "react-redux";
export default function CheckoutProduct({ product }) {
  return (
    <div className="flex gap-3 items-center justify-between mb-3">
      <div className="flex w-50 items-center gap-3">
        <img src={product?.imageCover} alt="" className="w-20 h-20" />
        <p
          className="m-0 w-50 h-5"
          style={{
            whiteSpace: "nowrap",
            width: "50px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product?.title}
        </p>
      </div>
      <div>${product.price}</div>
    </div>
  );
}
