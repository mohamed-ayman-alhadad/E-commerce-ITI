import React, { useContext } from "react";
import { useState, useEffect } from "react";
import style from "./Header.module.css"
import Nav from "../Nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from "../../Contexts/StatesContext";
function Header() {
    const {theme, setTheme} = useContext(ThemeContext);
    const {isOpen, setIsOpen} = useContext(ThemeContext);
    const {language, setLanguage} = useContext(ThemeContext);
  
    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const changeLanguage = (lang) => {
        setLanguage(lang);
        setIsOpen(false);
    }

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };


    return <>
        <div className=" w-100  ">
            <div className="flex justify-between gap-5">
            <div className={theme === "light" ? style.Header : style.Header_Dark}>
                <button className={theme === "light" ? "btn btn-dark mx-5" : "btn btn-gray-300 text-black mx-5"} onClick={toggleTheme}>
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>


                <div className="w-75 d-flex align-items-center  justify-content-center  d-md-flex d-none  ">
                    <p className="mb-0">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <a href="" className={theme === "light" ? "btn btn-dark" : "btn btn-gray-300 text-black"}> shop Now</a>
                </div>
                <div className="position-relative end-13 ">
                    <button
                        className={theme === "light" ? "btn btn-dark" : "btn btn-gray-300 text-black"}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {language} ▼
                    </button>

                    {isOpen && (
                        <ul className="position-absolute z-1 bg-white list-unstyled border rounded shadow mt-2 p-2">
                            <li>
                                <button className="dropdown-item text-black py-2 px-3 rounded " onClick={() => changeLanguage("English")}>
                                    English
                                </button>
                            </li>
                            <li className="dropdown-divider my-1"></li>
                            <li>
                                <button className="dropdown-item text-black py-2 px-3 rounded " onClick={() => changeLanguage("العربية")}>
                                    العربية
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
                </div>

            </div>

            <Nav theme={theme} />
        </div >
        <hr className="mb-0" />
    </>
}

export default Header;