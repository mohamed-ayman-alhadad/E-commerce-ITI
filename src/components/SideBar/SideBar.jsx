import React, { useContext } from "react";
import { useState } from "react";
import style from "./SideBar.module.css"
import ThemeContext from "../../Contexts/StatesContext";
import DropDown from "../../assets/Images/DropDown.png"
function SideBar() {
    const {theme, setTheme} = useContext(ThemeContext)
    return <>
        <div className={theme === "light" ? style.SideBar : style.SideBar_Dark}>
            <div className="flex justify-between">Woman’s Fashion <img src={DropDown} alt="" className="px-3" /> </div>
            <div className="flex justify-between">Men’s Fashion <img src={DropDown} alt="" className="px-3" /></div>
            <div>Electronics</div>
            <div>Home & Lifestyle</div>
            <div>Medicine</div>
            <div>Sports & Outdoor</div>
            <div>Baby’s & Toys</div>
            <div>Groceries & Pets</div>
            <div>Health & Beauty</div>
        </div>
    </>
}

export default SideBar;