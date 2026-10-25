import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/slices/cartSlice";
import { removeFromFavList } from "../../redux/slices/favSlice";
import styles from "./WishListCard.module.css";

function WishListCard({ product }) {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const addProductToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);
    toast.success("Added to your cart", { theme: "colored" });
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageArea}>
        <img src={product.imageCover} alt={product.title} loading="lazy" className={styles.productImage} />
        <button
          type="button"
          onClick={() => dispatch(removeFromFavList(product))}
          className={styles.favoriteButton}
          aria-label={`Remove ${product.title} from wishlist`}
        >
          <FiHeart aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={addProductToCart}
          className={styles.addToCart}
        >
          <FiShoppingBag aria-hidden="true" />
          {isAdded ? "Add another" : "Add to cart"}
        </button>
      </div>
      <div className={styles.details}>
        {product.category?.name && <p className={styles.category}>{product.category.name}</p>}
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.footer}>
          <span className={styles.price}>${Number(product.price).toFixed(2)}</span>
          <Link to={`/products/${product.id}`} className={styles.detailsLink}>
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default WishListCard;
