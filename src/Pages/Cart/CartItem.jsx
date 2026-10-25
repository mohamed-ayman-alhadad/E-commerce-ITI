import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { decrement, increment, removeFromCart } from "../../redux/slices/cartSlice";

function CartItem({ product }) {
  const [confirmRemove, setConfirmRemove] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <article className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-3 border-b border-gray-200 py-5 sm:grid-cols-[minmax(0,2fr)_1fr_1fr_1fr] sm:items-center">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <img
            src={product.imageCover}
            alt={product.title}
            loading="lazy"
            className="h-16 w-16 flex-none rounded bg-stone-100 object-contain p-2"
          />
          <div className="min-w-0">
            <h2 className="line-clamp-2 text-sm font-medium">{product.title}</h2>
            <button
              type="button"
              onClick={() => setConfirmRemove(true)}
              className="mt-1 inline-flex items-center gap-1 text-xs text-gray-500 hover:text-red-700"
            >
              <FiTrash2 aria-hidden="true" /> Remove
            </button>
          </div>
        </div>
        <p className="m-0 text-sm font-medium sm:text-center">${Number(product.price).toFixed(2)}</p>
        <div className="col-span-2 flex items-center justify-between sm:col-span-1 sm:justify-center">
          <span className="text-xs text-gray-500 sm:hidden">Quantity</span>
          <div className="inline-flex h-9 items-center overflow-hidden rounded border border-gray-300">
            <button
              type="button"
              onClick={() => dispatch(decrement(product))}
              disabled={product.cartQuantity <= 1}
              className="grid h-9 w-9 place-items-center hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label={`Decrease ${product.title} quantity`}
            >
              <FiMinus aria-hidden="true" />
            </button>
            <output className="grid h-9 min-w-10 place-items-center border-x border-gray-300 text-sm" aria-label="Quantity">
              {product.cartQuantity}
            </output>
            <button
              type="button"
              onClick={() => dispatch(increment(product))}
              disabled={Number.isFinite(Number(product.quantity)) && product.cartQuantity >= Number(product.quantity)}
              className="grid h-9 w-9 place-items-center hover:bg-gray-100"
              aria-label={`Increase ${product.title} quantity`}
            >
              <FiPlus aria-hidden="true" />
            </button>
          </div>
        </div>
        <p className="m-0 hidden text-right text-sm font-semibold sm:block">
          ${(product.price * product.cartQuantity).toFixed(2)}
        </p>
        <p className="col-span-2 m-0 text-right text-xs font-semibold sm:hidden">
          Subtotal: ${(product.price * product.cartQuantity).toFixed(2)}
        </p>
      </article>

      <Modal show={confirmRemove} onHide={() => setConfirmRemove(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Remove item?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Remove {product.title} from your cart?</Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-outline-secondary" onClick={() => setConfirmRemove(false)}>
            Keep item
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(removeFromCart(product))}
          >
            Remove
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartItem;
