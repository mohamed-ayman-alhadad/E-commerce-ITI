import favourit from "../../assets/Images/favourit.png";
import Cart1 from "../../assets/Images/Cart1.png";
import search from "../../assets/Images/search.png";
import { NavLink, useNavigate } from "react-router-dom";
import routes from "./routes";
import { useSelector } from "react-redux";
import Icon from "./IconProfile/Icon";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

function Nav({ theme }) {
  const [show, setShow] = useState(false);
  const navigation = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (show && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-icon')) {
        setShow(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [show]);

  const goToCart = () => {
    navigation("/cart");
    setShow(false);
  };
  const goTowishlist = () => {
    navigation("/wishlist");
    setShow(false);
  };

  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart);
  const favList = useSelector((state) => state.Fav.favProducts);

  const openMunue = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="d-flex w-100 container justify-content-between align-items-center py-3 position-relative">
        <div className="d-flex align-items-center gap-4">
          <h2 className="mb-0">Exclusive</h2>
          
          {/* Desktop Navigation */}
          <ul className="d-none d-lg-flex list-unstyled mb-0 gap-3">
            {routes.map((route) => (
              <li key={route.href}>
                <NavLink
                  style={{ 
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    transition: "all 0.3s ease",
                    fontSize: "15px",
                    whiteSpace: "nowrap"
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? theme === "light"
                        ? "text-blue bg-light"
                        : "bg-dark text-white"
                      : theme === "light"
                      ? "text-black hover:bg-light"
                      : "text-white hover:bg-dark"
                  }
                  to={route.href}
                >
                  {user
                    ? route.label === "Sing Up"
                      ? ""
                      : route.label
                    : route.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`mobile-menu d-lg-none position-fixed top-0 start-0 h-100 w-75 p-4 ${
            show ? 'show' : ''
          }`}
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#1a1a1a",
            zIndex: 1000,
            transform: show ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
            boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
          }}
        >
          <div className="d-flex flex-column h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">Exclusive</h2>
              <GiHamburgerMenu 
                className="hamburger-icon fs-4" 
                onClick={openMunue}
                style={{ cursor: "pointer" }}
              />
            </div>
            
            <ul className="list-unstyled mb-4">
              {routes.map((route) => (
                <li key={route.href} className="mb-3">
                  <NavLink
                    style={{ 
                      textDecoration: "none",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      display: "block",
                      transition: "all 0.3s ease",
                      fontSize: "16px"
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? theme === "light"
                          ? "text-blue bg-light"
                          : "bg-dark text-white"
                        : theme === "light"
                        ? "text-black hover:bg-light"
                        : "text-white hover:bg-dark"
                    }
                    to={route.href}
                    onClick={() => setShow(false)}
                  >
                    {user
                      ? route.label === "Sing Up"
                        ? ""
                        : route.label
                      : route.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {show && (
          <div 
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 999
            }}
            onClick={() => setShow(false)}
          />
        )}

        <div className="d-flex align-items-center gap-3">
          {/* Search Bar - Hidden on Mobile */}
          <div className={`input-group ${!user ? 'd-flex' : 'd-none d-lg-flex'}`} style={{ 
            minWidth: "200px", 
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            transition: "all 0.3s ease"
          }}>
            <input
              type="text"
              className="form-control border-0"
              placeholder="What are you looking for?"
              aria-label="Search"
              aria-describedby="basic-addon1"
              style={{
                padding: "12px 16px",
                fontSize: "14px",
                backgroundColor: theme === "light" ? "#fff" : "#2a2a2a",
                color: theme === "light" ? "#333" : "#fff"
              }}
            />
            <div className="input-group-prepend">
              <span 
                className="input-group-text h-100 px-3 border-0" 
                id="basic-addon1"
                style={{
                  backgroundColor: theme === "light" ? "#f8f9fa" : "#333",
                  cursor: "pointer"
                }}
              >
                <img 
                  style={{ width: "20px", opacity: "0.7" }} 
                  src={search} 
                  alt="search" 
                />
              </span>
            </div>
          </div>

          {/* Icons Section */}
          <div className="d-flex align-items-center gap-2">
            {user && (
              <>
                <div className="cursor-pointer position-relative">
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      padding: "8px",
                      width: "40px",
                      borderRadius: "8px",
                      backgroundColor: theme === "light" ? "#f8f9fa" : "#2a2a2a"
                    }}
                  >
                    <img 
                      src={favourit} 
                      onClick={goTowishlist} 
                      alt="favorites"
                      style={{ width: "22px", height: "22px" }}
                    />
                    {favList.length > 0 && (
                      <div
                        className="position-absolute rounded-circle badge text-center px-0"
                        style={{ 
                          top: "-5px", 
                          right: "-5px",
                          fontSize: "11px",
                          minWidth: "18px",
                          height: "18px",
                          backgroundColor: "#FF6B6B",
                          color: "white",
                          border: "2px solid white"
                        }}
                      >
                        {favList.length}
                      </div>
                    )}
                  </div>
                </div>

                <div className="position-relative">
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      padding: "8px",
                      width: "40px",
                      borderRadius: "8px",
                      backgroundColor: theme === "light" ? "#f8f9fa" : "#2a2a2a"
                    }}
                  >
                    <img 
                      src={Cart1} 
                      onClick={goToCart} 
                      alt="cart"
                      style={{ width: "22px", height: "22px" }}
                    />
                    {cart.totalQuantity > 0 && (
                      <div
                        className="position-absolute rounded-circle badge text-center px-0"
                        style={{ 
                          top: "-5px", 
                          right: "-5px",
                          fontSize: "11px",
                          minWidth: "18px",
                          height: "18px",
                          backgroundColor: "#FF6B6B",
                          color: "white",
                          border: "2px solid white"
                        }}
                      >
                        {cart.totalQuantity}
                      </div>
                    )}
                  </div>
                </div>

                <div 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    padding: "4px",
                    width: "40px",
                    borderRadius: "8px",
                    backgroundColor: theme === "light" ? "#f8f9fa" : "#2a2a2a"
                  }}
                >
                  <Icon />
                </div>
              </>
            )}
          </div>

          {/* Hamburger Menu Icon */}
          <GiHamburgerMenu 
            className="hamburger-icon d-lg-none fs-4" 
            onClick={openMunue} 
            style={{ 
              cursor: "pointer",
              transition: "transform 0.3s ease",
              transform: show ? "rotate(90deg)" : "rotate(0deg)"
            }}
          />
        </div>
      </nav>
    </>
  );
}

export default Nav;
