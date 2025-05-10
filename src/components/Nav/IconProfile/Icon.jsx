import React, { useState, useEffect, useRef } from "react";
import userImg from "../../../assets/Images/user.png";
import userClicked from "../../../assets/Images/usrClicked.png";
import { Dropdown } from "react-bootstrap";
import  IconLogout from "../../../assets/Images/Icon-Logout.png";
import userWhite from "../../../assets/Images/userWhite.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";

export default function Icon() {
    const [open, setOpen] = useState(false);
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <button 
                onClick={() => setOpen(!open)}
                className="transition-transform hover:scale-110"
            >
                <img src={open ? userClicked : userImg} className="w-7 ms-3" alt="user profile" />
            </button>
            
            {open && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1 bg-gradient-to-b from-blue-300 to-black rounded-md">
                        <button
                            onClick={() => {navigation("/profile"); setOpen(false)}}
                            className="w-full flex items-center px-4 py-2 text-sm text-white hover:bg-blue-400 transition-colors duration-200"
                        >
                            <img src={userWhite} className="w-5 h-5 mr-3" alt="profile icon" />
                            My Account
                        </button>
                        
                        <div className="border-t border-gray-200 my-1"></div>
                        
                        <button
                            onClick={() => {dispatch(logout()); setOpen(false); navigation("/")}}
                            className="w-full flex items-center px-4 py-2 text-sm text-white hover:bg-blue-400 transition-colors duration-200"
                        >
                            <img src={IconLogout} className="w-5 h-5 mr-3" alt="logout icon" />
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
