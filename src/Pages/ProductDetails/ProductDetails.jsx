import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { FiHeart, FiMinus, FiPlus, FiStar } from "react-icons/fi";
import instance from "../../Utils/axiosInstance";
import { addToCartQuantity } from "../../redux/slices/cartSlice";
import { addToFavList, removeFromFavList } from "../../redux/slices/favSlice";
import styles from "./ProductDetails.module.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const favList = useSelector((state) => state.Fav.favProducts);
  const cartProduct = useSelector((state) =>
    state.cart.Cartproducts.find((product) => product.id === id)
  );

  const { data, error, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await instance.get(`/products/${id}`);
      return response.data.data;
    },
  });

  useEffect(() => {
    setQuantity(1);
    setSelectedImage(data?.imageCover || "");
  }, [id, data?.imageCover]);

  const isFavorite = favList.some((product) => product.id === id);
  const availableQuantity = Number(data?.quantity);
  const inStock = Number.isFinite(availableQuantity) && availableQuantity > 0;
  const remainingQuantity = Math.max(0, availableQuantity - (cartProduct?.cartQuantity || 0));

  const addProduct = () => {
    if (!data || !inStock || quantity > remainingQuantity) {
      setCartMessage("Your cart already contains the available stock for this item.");
      return false;
    }
    dispatch(addToCartQuantity({ product: data, quantity }));
    setCartMessage("");
    return true;
  };

  const buyNow = () => {
    if (addProduct()) navigate("/checkout");
  };

  const toggleFavourite = () => {
    if (!data) return;
    dispatch(
      isFavorite ? removeFromFavList(data) : addToFavList(data)
    );
  };

  if (isLoading) {
    return <div className={`page-container py-24 text-center ${styles.loading}`} role="status">Loading product details…</div>;
  }

  if (error || !data) {
    return (
      <div className={`page-container py-24 text-center ${styles.error}`} role="alert">
        <h1 className="section-heading">Product details unavailable</h1>
        <p className="mt-3 text-gray-600">
          {error?.message || "This product could not be found."}
        </p>
        <Link to="/products" className="primary-action mt-4">Back to shop</Link>
      </div>
    );
  }

  return (
    <div className={`page-container ${styles.page}`}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link to="/" className="text-inherit no-underline hover:underline">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link to="/products" className="text-inherit no-underline hover:underline">Shop</Link>
        <span aria-hidden="true"> / </span>
        <span className={styles.currentCrumb}>{data.title}</span>
      </nav>

      <div className={styles.layout}>
        <section className={styles.gallery} aria-label="Product images">
          <div className={styles.thumbnails}>
            {[data.imageCover, ...(data.images || [])]
              .filter((image, index, images) => image && images.indexOf(image) === index)
              .map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`${styles.thumbnail} ${image === selectedImage ? styles.thumbnailSelected : ""}`}
                  aria-label={`View product image ${index + 1}`}
                  aria-pressed={image === selectedImage}
                >
                  <img src={image} alt="" />
                </button>
              ))}
          </div>
          <div className={styles.imageStage}>
            <img
              key={selectedImage || data.imageCover}
              src={selectedImage || data.imageCover}
              alt={data.title}
              className={styles.mainImage}
            />
          </div>
        </section>

        <section className={styles.information} aria-labelledby="product-title">
          {data.category?.name && <p className="eyebrow">{data.category.name}</p>}
          <h1 id="product-title" className={styles.title}>{data.title}</h1>
          <div className={styles.meta}>
            {Number(data.ratingsAverage) > 0 && (
              <span className={styles.rating}>
                <FiStar aria-hidden="true" /> {Number(data.ratingsAverage).toFixed(1)}
                <span>({data.ratingsQuantity || 0} reviews)</span>
              </span>
            )}
            <span className={`${styles.stock} ${inStock ? styles.inStock : styles.outOfStock}`}>
              {inStock ? "In stock" : "Out of stock"}
            </span>
          </div>
          <p className={styles.price}>${Number(data.price).toFixed(2)}</p>
          <p className={styles.description}>{data.description}</p>

          {data.brand?.name && (
            <div className={styles.brand}>
              <span>Brand</span>
              <strong>{data.brand.name}</strong>
            </div>
          )}

          <div className={styles.purchaseRow}>
            <div className={styles.quantityControl}>
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className={styles.quantityButton}
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
              >
                <FiMinus aria-hidden="true" />
              </button>
              <output className={styles.quantityValue} aria-label="Quantity">
                {quantity}
              </output>
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.min(current + 1, availableQuantity))}
                className={styles.quantityButton}
                aria-label="Increase quantity"
                disabled={!inStock || quantity >= remainingQuantity}
              >
                <FiPlus aria-hidden="true" />
              </button>
            </div>
            <button type="button" className={`primary-action ${styles.buyButton}`} onClick={buyNow} disabled={!inStock || remainingQuantity < 1}>
              Buy now
            </button>
            <button
              type="button"
              onClick={toggleFavourite}
              className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteActive : ""}`}
              aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={isFavorite}
            >
              <FiHeart aria-hidden="true" className={isFavorite ? "fill-red-100 text-red-700" : ""} />
            </button>
          </div>
          {cartMessage && <p className={styles.alert} role="alert">{cartMessage}</p>}
          {!inStock && <p className={styles.alert}>This item is currently unavailable.</p>}

          <div className={styles.policy}>
            <div className={styles.policyItem}>
              <h2>Delivery information</h2>
              <p>
                Shipping is currently shown as free in checkout. Order submission is not connected yet.
              </p>
            </div>
            <div className={styles.policyItem}>
              <h2>Returns</h2>
              <p>
                Return policy details are not available in the product catalog.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetails;
