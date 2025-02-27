import { useSelector } from "react-redux";
import WishListCard from "./WishListICard";
import wishlist from "../../assets/Images/wishlist.webp"

function WishList() {

    const favList = useSelector(state => state.Fav.favProducts)
    console.log(favList);
    if(favList.length === 0){
        return (
            <div className="flex justify-center items-center pt-5 mt-5 gap-3">
                <img src={wishlist} alt="wishlist" className="w-30 h-30 bg-black rounded-2xl" />
                <p className="text-center  text-red-600 fs-1 ">WishList is Empty</p>
            </div>
        )
    }
   
    return (
        <>
        <div className="container">

       <div className="flex justify-between items-center my-20">
        <p className=" fs-5">WishList ({favList.length})</p>
        <button className="border border-gray-400 rounded-2 p-3 hover:bg-gray-200">Move All To Cart</button>
       </div>
        <div className="flex flex-wrap gap-5 justify-center">
            {favList.map(product => <WishListCard key={product.id} product={product} />)}
        </div>
        </div>
        </>
);
}

export default WishList;