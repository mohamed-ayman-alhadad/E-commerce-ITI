import React, { useContext } from "react";
import { useState } from "react";
import style from "./SideBar.module.css";
import ThemeContext from "../../Contexts/StatesContext";
import DropDown from "../../assets/Images/DropDown.png";
import { GiHamburgerMenu } from "react-icons/gi";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const openMunue = () => {
        setIsOpen(!isOpen);
    }
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={
          theme === "light" && isOpen
            ? `${style.SideBar}   d-flex absolute top-47  border-0 left-25  h-99 z-10 d-md-none bg-gradient-to-r from-blue-300 to-white shadow-md rounded ` 
            : `${style.SideBar_Dark} d-none d-md-flex`
        }
      >
        <div className="flex justify-between">
          Woman’s Fashion <img src={DropDown} alt="" className="px-3" />{" "}
        </div>
        <div className="flex justify-between">
          Men’s Fashion <img src={DropDown} alt="" className="px-3" />
        </div>
        <div>Electronics</div>
        <div>Home & Lifestyle</div>
        <div>Medicine</div>
        <div>Sports & Outdoor</div>
        <div>Baby’s & Toys</div>
        <div>Groceries & Pets</div>
        <div>Health & Beauty</div>
      </div>
      <GiHamburgerMenu className="d-md-none mt-4" onClick={() => openMunue()} />
    </>
  );
}

export default SideBar;
