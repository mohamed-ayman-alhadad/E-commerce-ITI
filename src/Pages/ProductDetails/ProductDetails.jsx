import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../../Utils/axiosInstance";
import star from "../../assets/Images/stared.png";
import unstar from "../../assets/Images/Unstar.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fav from "../../assets/Images/fav.png";
import faved from "../../assets/Images/faved.png";
import { addToFavList, removeFromFavList } from "../../redux/slices/favSlice";
import delevary from "../../assets/Images/icon-delivery.png";
import Return from "../../assets/Images/Icon-return.png";
import { Spinner } from "react-bootstrap";
import { addToCart } from "../../redux/slices/cartSlice";
function ProductDetails() {
  const navigate = useNavigate();
  const [Sizes, setSizes] = useState([
    {
      id: 1,
      size: "XS",
      active: false
    },
    {
      id: 2,
      size: "S",
      active: false,
    },
    {
      id: 3,
      size: "M",
      active: true,
    },
    {
      id: 4,
      size: "L",
      active: false,
    },
    {
      id: 5,
      size: "XL",
      active: false,
    },
  ]);
  const [Quantity, setQuantity] = useState(1);
  const favList = useSelector((state) => state.Fav.favProducts);

  const chooseSize = (id) => {
    const newSizes = Sizes.map((size) => {
      if (size.id === id) {
        return { ...size, active: true };
      } else {
        return { ...size, active: false };
      }
    });
    setSizes(newSizes);
  };
  const params = useParams();
  console.log(params);

  const { data, error, isLoading } = useQuery({
    queryKey: ["product", params.id],
    queryFn: async () => {
      const res = await instance.get(`/products/${params.id}`);
      return res.data.data;
    },
  });
  console.log(data, "sdata");
  const dispatch = useDispatch();
  const hamdleDecreament = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    }
  };
  const handleIncreament = () => {
    setQuantity(Quantity + 1);
  };
  const favproduct =favList.find((product) => product.id === params.id);

const goToBuy = () => {
  dispatch(addToCart(data));
  navigate("/checkout");
};
   const toggleFavourite = () => {
      if (favproduct) {
        dispatch(removeFromFavList(data));
      } else {
        dispatch(addToFavList(data));
      }
    };
    if (isLoading) {
      return <div className="flex justify-center items-center h-screen"><Spinner animation="border" variant="danger" /></div>;
    }
  return (
    <div className="container ">
      <div className="flex align-middle mb-5 mt-5  " >
        <span
          style={{
            width: "15px",
            height: "40px",
            backgroundColor: "red",
            borderRadius: "20%",
          }}
        ></span>
        <p className="ms-2 text-red-700 mb-0 mt-2">Product Details</p>
      </div>

      <div className="w-100 flex gap-4 ">
        <div className=" sticky top-0 h-screen overflow-y-auto flex" style={{ width: "60%" }}>
          <div className="w-25 h-150 flex flex-col overflow-auto   gap-2 " style={{scrollbarWidth:"none"}}>
            { data?.images.map((image, index) => (
              <img key={index} src={image} className="w-40 h-35 bg-gray-300 " />
            ))}
          </div>
          <div className="w-75 h-150">
            <img src={data?.imageCover} className="w-75 h-100 bg-gray-300" />
          </div>
        </div>
        {/*******************************************************************************************************/}
        <div style={{ width: "40%" }} className="flex flex-col">
          <h2>{data?.title}</h2>
          <div className="flex items-center gap-2">
            <ul className="flex align-items-center gap-1.5 me-1 p-0 m-0 ">
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
            <div className="text-gray-500">(150 Reviews)</div>
            <span>|</span>
            <div className="text-green-400">In Stock</div>
          </div>
          <p className="fs-3 my-3">${data?.price}.00</p>
          <p className="text-sm border-b-1 pb-4 border-gray-300">
            {data?.description}
          </p>
          <div className="flex gap-3 items-center mb-2">
            <span className="fs-4">Colours:</span>
            <ul className="flex items-center gap-1.5 p-0 m-0 ">
              <li className="w-4 h-4 bg-blue-400 rounded-full border-2 border-white outline-2 "></li>
              <li className="w-4 h-4 bg-red-400 rounded-full"></li>
            </ul>
          </div>
          <div className="flex gap-3 items-center mb-3">
            <span className="fs-4">Sizes:</span>
            <ul className="flex items-center gap-3 p-0 m-0">
              {Sizes.map((size) => (
                <li
                  onClick={() => chooseSize(size.id)}
                  className={
                    size.active
                      ? "w-8 text-center border border-gray-300 px-2 py-1 bg-red-600 text-white rounded"
                      : "w-8 text-center rounded border border-gray-300 px-2 py-1"
                  }
                >
                  {size.size}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 items-end mb-4">
            <div className="relative flex items-center max-w-[8rem] mt-2 rounded-3 overflow-auto">
              <button
                onClick={() => hamdleDecreament()}
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                className="rounded-3 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 px-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                placeholder={Quantity}
              ></input>
              <button
                onClick={() => handleIncreament()}
                type="button"
                id="increment-button"
                data-input-counter-increment="quantity-input"
                className="rounded-3 bg-red-600  dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-red-400 border border-gray-300 rounded-e-lg p-2 px-3  h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-3 h-3 text-white dark:text-white"
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
            <button onClick={()=> goToBuy()} className=" bg-red-600 px-5 py-2 hover:bg-red-800 text-white rounded-2">Buy Now</button>
            <button onClick={() => toggleFavourite()} className="border border-gray-300 px-2 py-2 rounded-2">
                <img src={favproduct ?faved :fav } className="w-6 h-6" /></button>
          </div>
          <div className="w-100 border-1 mt-4 rounded-2">
            <div className="w-100 p-3 flex gap-3 border-b">
              <img src={delevary} className="w-15 h-15" />
              <div>
                <p className="font-bold fs-5 m-0 pb-2">Free Delivery</p>
                <p className="text-sm m-0">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="w-100 p-3 flex gap-3">
              <img src={Return} className="w-15 h-15" />
              <div>
                <p className="font-bold fs-5 m-0 pb-2">Return Delivery</p>
                <p className="text-sm m-0">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
