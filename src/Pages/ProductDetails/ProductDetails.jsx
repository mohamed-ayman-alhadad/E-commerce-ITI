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
      return (
        <div className="flex justify-center items-center h-screen">
          <Spinner animation="border" variant="danger" />
        </div>
      );
    }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <span className="w-2 h-10 bg-red-600 rounded-md"></span>
        <h1 className="ms-3 text-2xl font-bold text-red-700">Product Details</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images Section */}
        <div className="lg:w-3/5">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:h-[600px] scrollbar-hide">
              {data?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  alt={`Product view ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex-1">
              <img
                src={data?.imageCover}
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                alt="Main product"
              />
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="lg:w-2/5 space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">{data?.title}</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={i < 3 ? star : unstar}
                    alt="rating"
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <span className="text-gray-500">(150 Reviews)</span>
              <span className="text-green-500 font-medium">In Stock</span>
            </div>
            <p className="text-2xl font-bold text-red-600 mb-4">${data?.price}.00</p>
            <p className="text-gray-600 border-b border-gray-200 pb-6">
              {data?.description}
            </p>
          </div>

          {/* Colors */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold">Colors:</span>
              <div className="flex gap-2">
                <button className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"></button>
                <button className="w-8 h-8 bg-red-400 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"></button>
              </div>
            </div>

            {/* Sizes */}
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold">Sizes:</span>
              <div className="flex gap-2">
                {Sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => chooseSize(size.id)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md transition-all ${
                      size.active
                        ? "bg-red-600 text-white"
                        : "border border-gray-300 hover:border-red-600"
                    }`}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={hamdleDecreament}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  -
                </button>
                <input
                  type="text"
                  value={Quantity}
                  readOnly
                  className="w-16 text-center border-x border-gray-200 py-2"
                />
                <button
                  onClick={handleIncreament}
                  className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={goToBuy}
                className="flex-1 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Buy Now
              </button>
              <button
                onClick={toggleFavourite}
                className="p-2 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src={favproduct ? faved : fav}
                  alt="favorite"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="space-y-4 mt-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <img src={delevary} alt="delivery" className="w-12 h-12" />
              <div>
                <h3 className="font-bold text-lg mb-1">Free Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <img src={Return} alt="return" className="w-12 h-12" />
              <div>
                <h3 className="font-bold text-lg mb-1">Return Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
