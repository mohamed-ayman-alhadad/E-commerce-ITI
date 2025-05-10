import React, { useContext } from "react";
import { useState } from "react";
import style from "./SideBar.module.css";
import ThemeContext from "../../Contexts/StatesContext";
import DropDown from "../../assets/Images/DropDown.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={openMenu}
        />
      )}
      
      {/* Mobile Menu */}
      <div
        className={`${
          theme === "light" && isOpen
            ? "fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:relative md:top-0 md:left-0 md:h-auto md:w-full md:bg-transparent md:shadow-none md:transform-none"
            : "hidden md:block"
        } ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex justify-between items-center p-4 border-b md:hidden">
          <h2 className="text-xl font-bold">Menu</h2>
          <IoClose 
            className="text-2xl cursor-pointer hover:text-gray-600 transition-colors" 
            onClick={openMenu}
          />
        </div>
        
        <div className="flex flex-col gap-2 p-4 md:p-6">
          <div className="flex items-center justify-between hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200 group">
            <span className="font-medium group-hover:text-blue-600">Woman's Fashion</span>
            <img src={DropDown} alt="dropdown" className="w-4 h-4 group-hover:rotate-180 transition-transform" />
          </div>
          <div className="flex items-center justify-between hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200 group">
            <span className="font-medium group-hover:text-blue-600">Men's Fashion</span>
            <img src={DropDown} alt="dropdown" className="w-4 h-4 group-hover:rotate-180 transition-transform" />
          </div>
          <div className="hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200 group">
            <span className="font-medium group-hover:text-blue-600">Electronics</span>
          </div>
          <div className="hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200 group">
            <span className="font-medium group-hover:text-blue-600">Home & Lifestyle</span>
          </div>
          <div className="hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200 group">
            <span className="font-medium group-hover:text-blue-600">Medicine</span>
          </div>
          <div className="hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200 group">
            <span className="font-medium group-hover:text-blue-600">Sports & Outdoor</span>
          </div>
          <div className="hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200 group">
            <span className="font-medium group-hover:text-blue-600">Baby's & Toys</span>
          </div>
          <div className="hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200 group">
            <span className="font-medium group-hover:text-blue-600">Groceries & Pets</span>
          </div>
          <div className="hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200 group">
            <span className="font-medium group-hover:text-blue-600">Health & Beauty</span>
          </div>
        </div>
      </div>
      
      <GiHamburgerMenu 
        className="md:hidden mt-4 text-2xl cursor-pointer hover:text-blue-600 transition-colors" 
        onClick={openMenu} 
      />
    </>
  );
}

export default SideBar;
