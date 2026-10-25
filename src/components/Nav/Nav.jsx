import { useState } from "react";
import { FiHeart, FiMenu, FiSearch, FiShoppingBag, FiX } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "./routes";
import Icon from "./IconProfile/Icon";
import styles from "./Nav.module.css";

function Nav({ theme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const favoriteCount = useSelector((state) => state.Fav.favProducts.length);

  const submitSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    navigate(query ? `/products?search=${encodeURIComponent(query)}` : "/products");
    setMenuOpen(false);
  };

  const visibleRoutes = routes.filter((route) => route.href !== "/sing up");
  const closeMenu = () => setMenuOpen(false);
  const linkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.activeLink : ""}`;

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.navRow}>
        <Link to="/" className={styles.brand} aria-label="Exclusive home" onClick={closeMenu}>
          Exclusive<span aria-hidden="true">.</span>
        </Link>

        <div className={styles.desktopLinks}>
          {visibleRoutes.map((route) => (
            <NavLink key={route.href} to={route.href} end={route.href === "/"} className={linkClass}>
              {route.label}
            </NavLink>
          ))}
          {!user && (
            <NavLink to="/sing up" className={linkClass}>
              Create account
            </NavLink>
          )}
        </div>

        <div className={styles.actions}>
          <form className={styles.search} role="search" onSubmit={submitSearch}>
            <label className="visually-hidden" htmlFor="site-search">
              Search products
            </label>
            <input
              id="site-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products"
            />
            <button type="submit" aria-label="Search products">
              <FiSearch aria-hidden="true" />
            </button>
          </form>

          {user ? (
            <>
              <Link
                to="/wishlist"
                className={styles.iconButton}
                aria-label={`Wishlist, ${favoriteCount} items`}
              >
                <FiHeart aria-hidden="true" />
                {favoriteCount > 0 && <span className={styles.badge}>{favoriteCount}</span>}
              </Link>
              <Link
                to="/cart"
                className={styles.iconButton}
                aria-label={`Cart, ${cartQuantity} items`}
              >
                <FiShoppingBag aria-hidden="true" />
                {cartQuantity > 0 && <span className={styles.badge}>{cartQuantity}</span>}
              </Link>
              <Icon />
            </>
          ) : (
            <Link to="/login" className={styles.loginLink}>
              Log in
            </Link>
          )}

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <form className={styles.mobileSearch} role="search" onSubmit={submitSearch}>
        <label className="visually-hidden" htmlFor="mobile-site-search">
          Search products
        </label>
        <input
          id="mobile-site-search"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search products"
        />
        <button type="submit" aria-label="Search products">
          <FiSearch aria-hidden="true" />
        </button>
      </form>

      {menuOpen && (
        <div
          className={styles.mobilePanel}
          id="mobile-navigation"
          data-theme={theme}
        >
          {visibleRoutes.map((route) => (
            <NavLink
              key={route.href}
              to={route.href}
              end={route.href === "/"}
              className={linkClass}
              onClick={closeMenu}
            >
              {route.label}
            </NavLink>
          ))}
          {!user && (
            <>
              <NavLink to="/sing up" className={linkClass} onClick={closeMenu}>
                Create account
              </NavLink>
              <NavLink to="/login" className={linkClass} onClick={closeMenu}>
                Log in
              </NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink to="/wishlist" className={linkClass} onClick={closeMenu}>
                Wishlist ({favoriteCount})
              </NavLink>
              <NavLink to="/cart" className={linkClass} onClick={closeMenu}>
                Cart ({cartQuantity})
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Nav;
