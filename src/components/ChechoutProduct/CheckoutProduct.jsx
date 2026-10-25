export default function CheckoutProduct({ product }) {
  return (
    <div className="flex min-w-0 items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <img src={product?.imageCover} alt={product?.title || ""} className="h-14 w-14 flex-none rounded bg-stone-100 object-contain p-1" />
        <div className="min-w-0">
          <p className="mb-1 line-clamp-2 text-sm font-medium">{product?.title}</p>
          <p className="mb-0 text-xs text-gray-500">Qty: {product?.cartQuantity}</p>
        </div>
      </div>
      <div className="flex-none text-sm font-medium">${(product.price * product.cartQuantity).toFixed(2)}</div>
    </div>
  );
}
