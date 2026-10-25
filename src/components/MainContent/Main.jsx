import { Link } from "react-router-dom";
import heroImage from "../../assets/Images/Side_Image.png";
import styles from "./Main.module.css";

function Main() {
  return (
    <section className={`${styles.hero} page-container`} aria-labelledby="hero-title">
      <img src={heroImage} alt="" className={styles.heroImage} />
      <div className={styles.heroContent}>
        <p className="eyebrow">The new-season edit</p>
        <h1 id="hero-title">Find the pieces that feel like you.</h1>
        <p className={styles.heroDescription}>
          Discover thoughtful everyday essentials and little things worth keeping.
        </p>
        <Link to="/products" className="primary-action">
          Shop the collection <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default Main;
