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
            <div className="row">
              <div className="col-md-3 relative h-37">
                <h5>Exclusive</h5>
                <h6 className="my-3">Subscribe</h6>
                <p className="text-xs">Get 10% off your first order</p>
                <input
                  type="email"
                  className=" bg-black  text-white text-sm py-2 px-3 border rounded"
                  placeholder="Enter your email"
                />
                <img
                  src={vector}
                  alt=""
                  className="absolute bottom-3 right-18 w-5"
                />
              </div>
              <div className="col-md-3">
                <h5>Support</h5>
                <p className="text-xs">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </p>
                <p className="text-xs">exclusive@gmail.com</p>
                <p className="text-xs">+88015-88888-9999</p>
              </div>
              <div className="col-md-2">
                <h5>Account</h5>
                <p className="text-xs">My Account</p>
                <p className="text-xs">Login / Register</p>
                <p className="text-xs">Cart</p>
                <p className="text-xs">Wishlist</p>
                <p className="text-xs">Shop</p>
              </div>
              <div className="col-md-2">
                <h5>Quick Links</h5>
                <p className="text-xs">Privacy Policy</p>
                <p className="text-xs">Terms Of Use</p>
                <p className="text-xs">FAQ</p>
                <p className="text-xs">Contact</p>
              </div>
              <div className="col-md-2">
                <h5>Download App</h5>
                <p className="text-xs">Save $3 with App New User Only</p>
                <div className="flex gap-2 mb-3">
                  <img src={QrCode} alt="" className="w-50 h-100" />
                  <div className="flex flex-col w-50 ">
                    <img src={AppStore} alt="" className="w-100 h-50" />
                    <img src={GooglePlay} alt="" className="w-100 h-50 " />
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaFacebookF />
                  <CiTwitter />
                  <FaInstagram />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
            <div className="text-center text-gray-500 mt-5 ">
              <p>© 2022 Rimel. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
