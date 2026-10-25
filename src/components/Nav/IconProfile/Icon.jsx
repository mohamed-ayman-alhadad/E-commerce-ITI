import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiLogOut, FiUser } from "react-icons/fi";
import { logout } from "../../../redux/slices/authSlice";

export default function Icon() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const signOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userDetails");
    dispatch(logout());
    setOpen(false);
    navigate("/");
  };

  return (
    <div className="position-relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="grid h-10 w-10 place-items-center rounded border border-transparent text-xl hover:border-gray-200 hover:bg-gray-50"
        aria-label="Account menu"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <FiUser aria-hidden="true" />
      </button>
      {open && (
        <div
          className="absolute right-0 z-50 mt-2 min-w-44 rounded border border-gray-200 bg-white p-1 shadow-lg"
          role="menu"
        >
          <Link
            to="/profile"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded px-3 py-2 text-sm text-gray-800 no-underline hover:bg-gray-100"
          >
            <FiUser aria-hidden="true" /> My account
          </Link>
          <button
            type="button"
            role="menuitem"
            onClick={signOut}
            className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm text-gray-800 hover:bg-gray-100"
          >
            <FiLogOut aria-hidden="true" /> Log out
          </button>
        </div>
      )}
    </div>
  );
}
