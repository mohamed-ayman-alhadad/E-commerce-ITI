import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";
import { toast } from "react-toastify";
import ThemeContext from "../../Contexts/StatesContext";
import { addToCart } from "../../redux/slices/cartSlice";
import { addToFavList, removeFromFavList } from "../../redux/slices/favSlice";
import styles from "./ProductCard.module.css";

function ProductCard({ name, price, image, id, product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const favList = useSelector((state) => state.Fav.favProducts);
  const isFavorite = favList.some((favorite) => favorite.id === id);
  const user = useSelector((state) => state.auth.user);
  const cartQuantity = useSelector(
    (state) =>
      state.cart.Cartproducts.find((cartProduct) => cartProduct.id === id)
        ?.cartQuantity || 0
  );

  const requireLogin = () => {
    toast.error(
      <span>
        Please log in to continue.{" "}
        <button className={styles.toastLink} onClick={() => navigate("/login")}>
          Log in
        </button>
      </span>,
      { theme: "colored" }
    );
  };

  const handleAddToCart = () => {
    if (!user) {
      requireLogin();
      return;
    }
    if (Number.isFinite(Number(product.quantity)) && cartQuantity >= Number(product.quantity)) {
      toast.error("You’ve reached the available stock for this product.", { theme: "colored" });
      return;
    }

    dispatch(addToCart(product));
    toast.success("Added to your cart", { theme: "colored" });
  };

  const toggleFavourite = () => {
    if (!user) {
      requireLogin();
      return;
    }
    dispatch(isFavorite ? removeFromFavList(product) : addToFavList(product));
  };

  const openDetails = () => {
    if (!user) {
      requireLogin();
      return;
    }
    navigate(`/products/${id}`);
  };

  const rating = Number(product?.ratingsAverage);
  const ratingCount = Number(product?.ratingsQuantity);

  return (
    <article className={styles.card} data-theme={theme}>
      <div className={styles.imageArea}>
        <button
          type="button"
          onClick={toggleFavourite}
          className={styles.favorite}
          aria-label={isFavorite ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
          aria-pressed={isFavorite}
        >
          <FiHeart aria-hidden="true" className={isFavorite ? styles.favoriteActive : ""} />
        </button>
        <button type="button" className={styles.productImageButton} onClick={openDetails}>
          <img src={image} alt={name} loading="lazy" />
        </button>
        <button type="button" className={styles.addToCart} onClick={handleAddToCart}>
          <FiShoppingBag aria-hidden="true" />
          Add to cart
        </button>
      </div>
      <div className={styles.details}>
        {product?.category?.name && <p className={styles.category}>{product.category.name}</p>}
        <button type="button" className={styles.productName} onClick={openDetails}>
          {name}
        </button>
        <div className={styles.priceRow}>
          <span className={styles.price}>${Number(price).toFixed(2)}</span>
          {Number.isFinite(rating) && rating > 0 && (
            <span
              className={styles.rating}
              aria-label={`${rating.toFixed(1)} out of 5 stars${ratingCount > 0 ? `, ${ratingCount} reviews` : ""}`}
            >
              <FiStar aria-hidden="true" />
              {rating.toFixed(1)}
              {ratingCount > 0 && <span className={styles.ratingCount}>({ratingCount})</span>}
            </span>
          )}
        </div>
        <button type="button" className={styles.detailsLink} onClick={openDetails}>
          View details <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
