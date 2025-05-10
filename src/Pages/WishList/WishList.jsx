import { useSelector } from "react-redux";
import WishListCard from "./WishListICard";
import wishlist from "../../assets/Images/wishlist.webp";

function WishList() {
  const favList = useSelector((state) => state.Fav.favProducts);
  console.log(favList);
  if (favList.length === 0) {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center pt-5 mt-5 gap-3 px-4">
        <img
          src={wishlist}
          alt="wishlist"
          className="w-24 h-24 md:w-30 md:h-30 bg-black rounded-2xl"
        />
        <p className="text-center text-red-600 text-xl md:text-2xl">WishList is Empty</p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center my-10 md:my-20 gap-4">
          <p className="text-lg md:text-xl">WishList ({favList.length})</p>
          <button className="w-full sm:w-auto border border-gray-400 rounded-lg p-2 md:p-3 hover:bg-gray-200 transition-colors">
            Move All To Cart
          </button>
        </div>
        <div className="flex flex-wrap gap-3 justify-center ">
          {favList.map((product) => (
            <WishListCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default WishList;
