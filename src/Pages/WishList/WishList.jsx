import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import WishListCard from "./WishListICard";
import { addToCart } from "../../redux/slices/cartSlice";
import { removeFromFavList } from "../../redux/slices/favSlice";

function WishList() {
  const favorites = useSelector((state) => state.Fav.favProducts);
  const dispatch = useDispatch();

  const moveAllToCart = () => {
    favorites.forEach((product) => {
      dispatch(addToCart(product));
      dispatch(removeFromFavList(product));
    });
    toast.success("Wishlist items moved to your cart", { theme: "colored" });
  };

  if (favorites.length === 0) {
    return (
      <section className="page-container flex min-h-[55vh] flex-col items-center justify-center py-16 text-center">
        <p className="eyebrow">Saved for later</p>
        <h1 className="section-heading mt-1">Your wishlist is empty</h1>
        <p className="mt-2 max-w-md text-gray-600">Save the products you love and find them here whenever you’re ready.</p>
        <Link to="/products" className="primary-action mt-5">Explore products</Link>
      </section>
    );
  }

  return (
    <div className="page-container py-10">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
        <Link to="/" className="text-inherit no-underline hover:underline">Home</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-gray-900">Wishlist</span>
      </nav>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Saved for later</p>
          <h1 className="section-heading">Your wishlist <span className="text-base font-normal text-gray-500">({favorites.length})</span></h1>
        </div>
        <button type="button" className="primary-action" onClick={moveAllToCart}>
          Move all to cart
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favorites.map((product) => <WishListCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default WishList;
