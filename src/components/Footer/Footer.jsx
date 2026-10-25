import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Link to="/" className={styles.brand}>Exclusive<span>.</span></Link>
          <p>Thoughtful finds for your everyday.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link to="/products">Shop all</Link>
          <Link to="/about">Our story</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h2>Your account</h2>
          <Link to="/profile">My account</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Shopping cart</Link>
        </div>
        <div className={styles.contact}>
          <h2>Get in touch</h2>
          <p>Questions? Visit our contact page. Message submission is not connected yet.</p>
          <Link to="/contact">Contact our team <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Exclusive. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
