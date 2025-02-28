import React, { useState } from "react";
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
  return (
    <div className="relative p-0">

    <button onClick={() => setOpen(!open)}>
        <img src={open ? userClicked : userImg} className="w-7 ms-3" />
    </button>
    {open && 
      <ul className="absolute z-1 bg-gradient-to-b from-blue-300  to-black list-unstyled  opacity-90 rounded shadow mt-2 p-2">
        <li className="font-bold hover:bg-blue-300 rounded-3 flex items-center justify-center">
        <img src={userWhite} className="w-6 pt-1 ms-2" /> 

          <button
          onClick={() => {navigation("/profile") ; setOpen(!open)}}
            className="dropdown-item text-white py-2 ps-2 pe-3 rounded  "
          >
            My Account
          </button>
        </li>
        <li className="dropdown-divider my-1"></li>
        <li className="font-bold hover:bg-blue-300 rounded-3 flex items-center justify-center">
        <img src={IconLogout} className="w-6 h-6 pt-1 " /> 
          <button
          onClick={() => {dispatch(logout()) ; setOpen(!open) ; navigation("/")}}
            className="dropdown-item text-white py-2 px-2 rounded   "
          >
           <span>Logout </span>
          </button>
        </li>
      </ul>
}
    </div>
  );
}
