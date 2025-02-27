import { useContext } from "react";
import ThemeContext from "../../Contexts/StatesContext";
import trash from "../../assets/Images/trash (2).png";
import { useDispatch } from "react-redux";
import { removeFromFavList } from "../../redux/slices/favSlice";
import Cart from "../../assets/Images/Cart2.png";
import { addToCart } from "../../redux/slices/cartSlice";
function WishListCard({ product }) {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const handleRemoveFromFavList = () => {
    dispatch(removeFromFavList(product));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div
        style={{ height: "350px", width: "280px" }}
        className="flex flex-col rounded  relative shadow-md"
      >
        <div
          onClick={() => handleRemoveFromFavList()}
          className="absolute top-3 right-3 w-8 h-8 z-1 rounded-4xl bg-white flex justify-center items-center"
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
            className="w-100 text-center py-3 text-white bg-black absolute bottom-0 flex justify-center gap-2 "
          >
           <img src={Cart}/><span>Add to Cart</span>
          </div>
        </div>
        <div className="bg-stone-100 rounded-b-lg relative">
          <p
            className={
              theme === "light"
                ? "pt-2 mb-1 h-14 overflow-hidden ms-1"
                : "pt-2 mb-1 h-14 overflow-hidden ms-1 text-black"
            }
            style={{ height: "40px" }}
          >
            {product.title}
          </p>
          <div className="flex gap-2 ms-1 justify-between ">
            <p className="text-red-700">${product.price}</p>

            <button
              onClick={() => goToDetailes(product.id)}
              className=" bg-black text-white rounded-2 px-2 py-0.5 mx-3 mb-3"
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
