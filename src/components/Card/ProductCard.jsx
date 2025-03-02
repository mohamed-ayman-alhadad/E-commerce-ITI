import React, { use, useContext, useState } from "react";
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
import { Button, Modal } from "react-bootstrap";

function Card({ name, price, image, id, product , isFlash }) {
  const [isAdded, setIsAdded] = useState(false);
  const[isloggedIn, setIsLoggedIn] = useState(false)
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const favList = useSelector((state) => state.Fav.favProducts);
  const favproduct = favList.find((product) => product.id === id);
  const user = useSelector((state) => state.auth.user);
  const goToDetailes = (id) => {
    navigation(`/products/${id}`);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 700);
  };

  const toggleFavourite = () => {
    if (favproduct) {
      dispatch(removeFromFavList(product));
    } else {
      dispatch(addToFavList(product));
    }
  };

  const handleClose = () => setIsAdded(false);
const handleCloseloggedIn = () => setIsLoggedIn(false)
  return (
    <>
      <Modal
        show={isAdded}
        onHide={handleClose}
        backdrop="true"
        keyboard={false} 
      >
        <Modal.Body className="flex justify-between items-center rounded bg-green-500 text-white  ">Product added to cart successfully
        </Modal.Body>
      </Modal>



      <Modal
        show={isloggedIn}
        onHide={handleCloseloggedIn}
        backdrop="true"
        keyboard={false}
      >
        <Modal.Body className="flex justify-between items-center rounded bg-red-500 text-white  ">you are not logged in
        <Button variant="danger" onClick={(() => handleCloseloggedIn() , () => navigation("/sing up"))}>
          Sing Up
        </Button>
        </Modal.Body>
      </Modal>

      <div
        style={isFlash ? { height: "400px", minWidth: "280px", maxWidth:"300px" } : { height: "350px", minWidth: "280px" , maxWidth:"300px"}}
        className="flex flex-col rounded  relative shadow-md"
      >
        {isFlash&&(<div className="absolute text-white top-3 left-3 w-10 h-6 z-1 rounded bg-red-700 flex justify-center items-center">
         25%
        </div>)}
        <div
          onClick={user ?  toggleFavourite : () => setIsLoggedIn(true)}
          className="absolute top-3 right-3 w-8 h-8 z-1 cursor-pointer hover:bg-gray-200 rounded-4xl bg-white flex justify-center items-center"
        >
          <img src={favproduct ? faved : fav} className="w-5 h-5"></img>
        </div>
        <div className="absolute top-13 cursor-pointer right-3 w-8 h-8 z-1 rounded-4xl bg-white flex justify-center items-center">
          <img src={overview} className="w-7 h-7"></img>
        </div>
        <div className=" p-0">
          <div
            className="flex  justify-center items-center bg-gray-100 rounded-t-lg product-container "
            style={{ width: "100%", height: "270px" }}
          >
            <img src={image} style={{ width: "115px", height: "180px" }} />

            <div
              onClick={user ? handleAddToCart : () => setIsLoggedIn(true)}
              className="w-100 text-center py-3 text-white bg-black cursor-cell  add-to-cart"
            >
              Add to Cart
            </div>
          </div>
        </div>
        <div className="bg-white rounded-b-lg relative">
          <p
            className={
              theme === "light"
                ? "pt-2 m-0  h-10 overflow-hidden ms-1"
                : "pt-2 m-0 h-10 overflow-hidden ms-1 text-black"
            }
            style={{
              whiteSpace: "nowrap",
              width: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </p>
          <div className={isFlash ? "flex flex-col ms-1  " : "flex gap-2 ms-1  "}>
            <div className="flex gap-4 ">
            <p className="text-red-700">${price}</p>
            {isFlash&&<p className="text-gray-500 " style={{ textDecoration: "line-through" }}>${price + 1000}</p>}
            </div>
           <div className="flex gap-4 items-center ">
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
              onClick={user ? (() => goToDetailes(id)): () => setIsLoggedIn(true)}
              className=" bg-red-600 hover:bg-red-800 text-white rounded-2 px-2 py-0.5 mx-3 mb-2"
            >
              Details
            </button>
           </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
