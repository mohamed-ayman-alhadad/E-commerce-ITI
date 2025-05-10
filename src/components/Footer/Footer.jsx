import React, { useContext } from "react";
import { useState } from "react";
import style from "./Footer.module.css";
import ThemeContext from "../../Contexts/StatesContext";
import vector from "../../assets/Images/Vector.png";
import QrCode from "../../assets/Images/Qr Code.png";
import AppStore from "../../assets/Images/AppStore.png";
import GooglePlay from "../../assets/Images/GooglePlay.png";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`container-fluid p-0 ${
          theme === "light" ? "bg-black text-white" : "bg-light text-dark"
        }`}
      >
        <footer
          className={`py-4 ${
            theme === "light" ? "bg-black text-white" : "bg-gray-300 text-dark"
          }`}
        >
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-3 mb-4 mb-md-0">
                <h5 className="mb-3">Exclusive</h5>
                <h6 className="my-3">Subscribe</h6>
                <p className="text-xs mb-2">Get 10% off your first order</p>
                <div className="position-relative">
                  <input
                    type="email"
                    className="form-control bg-black text-white text-sm py-2 px-3 border rounded w-100"
                    placeholder="Enter your email"
                  />
                  <img
                    src={vector}
                    alt=""
                    className="position-absolute end-0 top-50 translate-middle-y me-2"
                    style={{ width: "20px" }}
                  />
                </div>
              </div>
              <div className="col-12 col-md-3 mb-4 mb-md-0">
                <h5 className="mb-3">Support</h5>
                <p className="text-xs mb-2">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </p>
                <p className="text-xs mb-2">exclusive@gmail.com</p>
                <p className="text-xs mb-2">+88015-88888-9999</p>
              </div>
              <div className="col-6 col-md-2 mb-4 mb-md-0">
                <h5 className="mb-3">Account</h5>
                <p className="text-xs mb-2">My Account</p>
                <p className="text-xs mb-2">Login / Register</p>
                <p className="text-xs mb-2">Cart</p>
                <p className="text-xs mb-2">Wishlist</p>
                <p className="text-xs mb-2">Shop</p>
              </div>
              <div className="col-6 col-md-2 mb-4 mb-md-0">
                <h5 className="mb-3">Quick Links</h5>
                <p className="text-xs mb-2">Privacy Policy</p>
                <p className="text-xs mb-2">Terms Of Use</p>
                <p className="text-xs mb-2">FAQ</p>
                <p className="text-xs mb-2">Contact</p>
              </div>
              <div className="col-12 col-md-2">
                <h5 className="mb-3">Download App</h5>
                <p className="text-xs mb-3">Save $3 with App New User Only</p>
                <div className="d-flex gap-2 mb-3">
                  <img src={QrCode} alt="" className="img-fluid" style={{ maxWidth: "50%" }} />
                  <div className="d-flex flex-column" style={{ width: "50%" }}>
                    <img src={AppStore} alt="" className="img-fluid mb-2" />
                    <img src={GooglePlay} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="d-flex gap-4 mt-3">
                  <FaFacebookF className="fs-5" />
                  <CiTwitter className="fs-5" />
                  <FaInstagram className="fs-5" />
                  <FaLinkedinIn className="fs-5" />
                </div>
              </div>
            </div>
            <div className="text-center text-gray-500 mt-5">
              <p className="mb-0">© 2022 Rimel. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
