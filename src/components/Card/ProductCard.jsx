import React, { useContext } from "react";
import star from "../../assets/Images/stared.png";
import unstar from "../../assets/Images/Unstar.png";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../Contexts/StatesContext";
import fav from "../../assets/Images/fav.png";
import faved from "../../assets/Images/faved.png";
import overview from "../../assets/Images/overview.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { addToFavList, removeFromFavList } from "../../redux/slices/favSlice";

function Card({ name, price, image, id, product, added }) {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const favList = useSelector((state) => state.Fav.favProducts);
  const favproduct =favList.find((product) => product.id === id);
  const goToDetailes = (id) => {
    navigation(`/products/${id}`);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const toggleFavourite = () => {
    if (favproduct) {
      dispatch(removeFromFavList(product));
    } else {
      dispatch(addToFavList(product));
    }
  };

  return (
    <>
      <div
        style={{ height: "350px", width: "280px" }}
        className="flex flex-col rounded  relative shadow-md"
      >
        
        <div
          onClick={() => toggleFavourite()}
          className="absolute top-3 right-3 w-8 h-8 z-1 rounded-4xl bg-white flex justify-center items-center"
        >
          <img src={favproduct ? faved : fav} className="w-5 h-5"></img>
        </div>
        <div className="absolute top-13 right-3 w-8 h-8 z-1 rounded-4xl bg-white flex justify-center items-center">
          <img src={overview} className="w-7 h-7"></img>
        </div>
        <div className=" p-0">
          <div
            className="flex  justify-center items-center bg-gray-100 rounded-t-lg product-container "
            style={{ width: "100%", height: "270px" }}
          >
            <img src={image} style={{ width: "115px", height: "180px" }} />
            {!added ? (
              <div
                onClick={handleAddToCart}
                className="w-100 text-center py-3 text-white bg-black  add-to-cart"
              >
                Add to Cart
              </div>
            ) : (
              <div
                onClick={handleRemoveFromCart}
                className="w-100 text-center py-3 text-white bg-black  add-to-cart"
              >
                Remove from Cart
              </div>
            )}
          </div>
        </div>
        <div className="bg-white rounded-b-lg relative">
          <p
            className={
              theme === "light"
                ? "pt-2 mb-1  h-14 overflow-hidden ms-1"
                : "pt-2 mb-1 h-14 overflow-hidden ms-1 text-black"
            }
            style={{ height: "39px" }}
          >
            {name}
          </p>
          <div className="flex gap-2 ms-1  ">
            <p className="text-red-700">${price}</p>
            <ul className="flex align-items-center me-1 ps-0 ">
              <li>
                <img src={star} alt="" />
              </li>
              <li>
                <img src={star} alt="" />
              </li>
              <li>
                <img src={star} alt="" />
              </li>
              <li>
                <img src={unstar} alt="" />
              </li>
              <li>
                <img src={unstar} alt="" />
              </li>
            </ul>
            <p className="text-gray-500"> (95)</p>
            <button
              onClick={() => goToDetailes(id)}
              className=" bg-black text-white rounded-2 px-2 py-0.5 mx-3 mb-2"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
