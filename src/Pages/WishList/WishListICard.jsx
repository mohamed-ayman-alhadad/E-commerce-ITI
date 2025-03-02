import { useContext, useState } from "react";
import ThemeContext from "../../Contexts/StatesContext";
import trash from "../../assets/Images/trash (2).png";
import { useDispatch } from "react-redux";
import { removeFromFavList } from "../../redux/slices/favSlice";
import Cart from "../../assets/Images/Cart2.png";
import { addToCart } from "../../redux/slices/cartSlice";
import { Modal } from "react-bootstrap";
function WishListCard({ product }) {
  const [removed, setRemoved] = useState(false);
  const[isAdded,setIsAdded]=useState(false)
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const handleRemoveFromFavList = () => {
    dispatch(removeFromFavList(product));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };
  const showModal = () => setRemoved(true);
const handleClose = () => setIsAdded(false);
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
                Are you sure you want to delete this product from wishlist?
              </p>
              <button
                onClick={() => handleRemoveFromFavList(product)}
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

      <Modal
        show={isAdded}
        onHide={handleClose}
        backdrop="true"
        keyboard={false}
      >
        <Modal.Body className="flex justify-between items-center rounded bg-green-500 text-white  ">
          Product added to cart successfully
        </Modal.Body>
      </Modal>
      <div
        style={{ height: "350px", width: "280px" }}
        className="flex flex-col rounded  relative shadow-md"
      >
        <div
          onClick={() => showModal()}
          className="absolute top-3 cursor-pointer right-3 w-8 h-8 z-1 rounded-4xl bg-white flex justify-center items-center"
        >
          <img src={trash} className="w-4 h-4"></img>
        </div>
        <div className=" p-0 flex flex-col relative">
          <div
            className="flex  justify-center items-center bg-gray-200 rounded-t-lg product-container "
            style={{ width: "100%", height: "270px" }}
          >
            <img
              src={product.imageCover}
              style={{ width: "115px", height: "180px" }}
            />
          </div>
          <div
            onClick={() => handleAddToCart()}
            className="w-100 text-center py-3 cursor-pointer text-white bg-black absolute bottom-0 flex justify-center gap-2 "
          >
            <img src={Cart} />
            <span>Add to Cart</span>
          </div>
        </div>
        <div className="bg-stone-100 rounded-b-lg relative">
          <p
            className={
              theme === "light"
                ? "pt-2 mb-1 h-9 overflow-hidden ms-1"
                : "pt-2 mb-1 h-9 overflow-hidden ms-1 text-black"
            }
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "200px",
            }}
          >
            {product.title}
          </p>
          <div className="flex gap-2 ms-1 justify-between ">
            <p className="text-red-700">${product.price}</p>

            <button
              onClick={() => goToDetailes(product.id)}
              className=" bg-red-600 hover:bg-red-800 text-white rounded-2 cursor-pointer px-2 py-0.5 mx-3 mb-3"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishListCard;
