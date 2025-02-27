import React, { useContext } from "react";
import { useState } from "react";
import style from "./Footer.module.css"
import ThemeContext from "../../Contexts/StatesContext";

function Footer() {
    const {theme, setTheme} = useContext(ThemeContext);
    return <>
         <div className={`container-fluid p-0 ${theme === "light" ? "bg-black text-white" : "bg-light text-dark"}`}>
    
            <footer className={`py-4 ${theme === "light" ? "bg-black text-white" : "bg-gray-300 text-dark"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Exclusive</h5>
                            <p>Subscribe and get 10% off your first order</p>
                            <input type="email" className="form-control" placeholder="Enter your email" />
                        </div>
                        <div className="col-md-3">
                            <h5>Support</h5>
                            <p>exclusive@gmail.com</p>
                            <p>+88015-88888-9999</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Account</h5>
                            <p>My Account</p>
                            <p>Cart</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Quick Links</h5>
                            <p>Privacy Policy</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className="text-center mt-5 ">
                        <p>© 2022 Rimel. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    </>
}

export default Footer;