import { useDispatch } from "react-redux";
import remove from "../../assets/Images/remove.png";
import {
  decrement,
  increment,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";

function CartItem({ product }) {
  const [removed, setRemoved] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  const handleIncreament = () => {
    dispatch(increment(product));
  };

  const hamdleDecreament = () => {
    dispatch(decrement(product));
  };

  const showModal = () => setRemoved(true);

  const toggleTooltip = (e) => {
    e.stopPropagation();
    setShowTooltip(!showTooltip);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };

    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltip]);

  return (
    <>
      {removed && (
        <Modal
          show={removed}
          onHide={() => setRemoved(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>
            <button
              onClick={() => setRemoved(false)}
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="mb-5 text-lg fs-3 font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </p>
              <button
                onClick={() => handleRemoveFromCart(product)}
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={() => setRemoved(false)}
                data-modal-hide="popup-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium rounded text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, cancel
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}
      <div className="d-flex justify-between shadow-sm items-center mb-5 text-center relative">
        <div
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          onClick={() => showModal()}
          className="absolute bg-red-600 top-1 left-1 w-5 h-5 z-1 rounded-4xl flex justify-center items-center"
        >
          <img src={remove} className="w-3 h-3" />
        </div>
        <div className="ps-4 flex gap-2 items-center text-sm w-25 fw-bold relative">
          <img src={product.imageCover} className="w-12 h-15" />
          <div className="relative" ref={tooltipRef}>
            <span
              onClick={toggleTooltip}
              className="cursor-pointer sm:cursor-default w-[20px] sm:w-[110px]"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block"
              }}
            >
              {product.title}
            </span>
            {showTooltip && (
              <div className="absolute z-10 left-0 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg sm:hidden">
                {product.title}
                <div className="absolute -top-2 left-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-900"></div>
              </div>
            )}
          </div>
        </div>
        <div className="p-4 w-25">${product.price}</div>
        <div className="p-4 w-25 flex justify-center">
          <div className="relative flex items-center max-w-[8rem]">
            <button
              onClick={() => hamdleDecreament()}
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              data-input-counter
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={product.cartQuantity}
            ></input>
            <button
              onClick={() => handleIncreament()}
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4 w-25">${product.price * product.cartQuantity}</div>
      </div>
    </>
  );
}

export default CartItem;
