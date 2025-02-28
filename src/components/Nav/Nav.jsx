import favourit from '../../assets/Images/favourit.png'
import Cart1 from '../../assets/Images/Cart1.png'
import search from '../../assets/Images/search.png'
import { NavLink, useNavigate } from 'react-router-dom';
import routes from './routes';
import { useSelector } from 'react-redux';
import Icon from './IconProfile/Icon';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

function Nav({ theme }) {
    const[show, setShow] = useState(false)
    const navigation = useNavigate();
    const goToCart = () => {
        navigation("/cart");
    }
    const goTowishlist = () => {
        navigation("/wishlist");
    }

    const user = useSelector((state) => state.auth.user);
const cart = useSelector((state) => state.cart);
const favList = useSelector((state) => state.Fav.favProducts);

const openMunue = () => {
    setShow(!show)
}
    return (<>
        <nav className="d-flex w-100 container justify-content-between align-items-center ">
            <h2 className='mb-0'>Exclusive</h2>

            <ul className={show ? "d-flex flex-column position-absolute rounded right-15 top-30  w-30 bg-gradient-to-r from-blue-300 to-white  z-10 h-55 list-unstyled  align-items-center gap-3  mb-0 d-lg-none"  :"d-flex list-unstyled  align-items-center gap-5 h-100 mb-0 d-none d-lg-flex"}>
                {routes.map((route) => (
                    <li key={route.href} className="" >
                        <NavLink style={{ textDecoration: "none" }} className={({ isActive }) => isActive ? theme === "light" ? "text-blue " : "" : theme === "light" ? "text-black" : "text-white"} to={route.href}>
                            {route.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className="d-flex align-items-center ">
                <div className="input-group mx-3">
                    <input type="text" className="form-control" placeholder="What are you looking for?" aria-label="Username" aria-describedby="basic-addon1" />
                    <div className="input-group-prepend">
                        <span className="input-group-text w-100 h-100" id="basic-addon1"><img style={{ width: "20px" }}
                            src={search} /></span>
                    </div>
                </div>
                <div className="mx-4 relative ">
                    <img src={favourit}  onClick={user && goTowishlist} />
                    {user && 
                    <div className='absolute w-5 h-5  bg-red-500 rounded-full badge text-center px-0 ' style={{ top: "-20px", right: "-18px" }}>{favList.length}</div>
                    }
                </div>
                <div className='relative'><img src={Cart1} onClick={user && goToCart} />
                {user && 
                    <div className='absolute w-5 h-5  bg-red-500 rounded-full badge text-center px-0 ' style={{ top: "-20px", right: "-18px" }}>{cart.totalQuantity}</div>
                }
                </div>
                {user && <Icon/> }
            </div>
                <GiHamburgerMenu className='d-lg-none' onClick={() => openMunue()} />
        </nav >

    </>);
}

export default Nav;