import { Link } from "react-router-dom";
import Feature1 from "../../assets/Images/Feature1.png";
import Feature2 from "../../assets/Images/Feature2.png";
import Feature3 from "../../assets/Images/Feature3.png";
import Feature4 from "../../assets/Images/Feature4.png";
import styles from "./Featured.module.css";

const features = [
  { image: Feature1, label: "Browse gaming and console products", className: styles.gaming },
  { image: Feature2, label: "Browse the women's collection", className: styles.womens },
  { image: Feature3, label: "Browse speaker products", className: styles.speakers },
  { image: Feature4, label: "Browse fragrance products", className: styles.perfume },
];

export default function Featured() {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <p className="eyebrow">Curated edits</p>
      <h2 id="featured-heading" className="section-heading">A little inspiration</h2>
      <div className={styles.grid}>
        {features.map((feature) => (
          <Link
            key={feature.label}
            to="/products"
            aria-label={`${feature.label}; view all products`}
            className={`${styles.card} ${feature.className}`}
          >
            <img
              src={feature.image}
              alt=""
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
