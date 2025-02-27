import favourit from '../../assets/Images/favourit.png'
import Cart1 from '../../assets/Images/Cart1.png'
import search from '../../assets/Images/search.png'
import { NavLink, useNavigate } from 'react-router-dom';
import routes from './routes';
import { useSelector } from 'react-redux';
function Nav({ theme }) {
    const navigation = useNavigate();
    const goToCart = () => {
        navigation("/cart");
    }
    const goTowishlist = () => {
        navigation("/wishlist");
    }

const cart = useSelector((state) => state.cart);
const favList = useSelector((state) => state.Fav.favProducts);
    return (<>
        <nav className="d-flex w-100 container justify-content-between align-items-center ">
            <h2 className='mb-0'>Exclusive</h2>

            <ul className="d-flex list-unstyled  align-items-center gap-5 h-100 mb-0  ">
                {routes.map((route) => (
                    <li key={route.href} >
                        <NavLink style={{ textDecoration: "none" }} className={({ isActive }) => isActive ? theme === "light" ? "text-blue-500" : "" : theme === "light" ? "text-black" : "text-white"} to={route.href}>
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
                    <img src={favourit}  onClick={()=>goTowishlist()} />
                    <div className='absolute w-5 h-5  bg-red-500 rounded-full badge text-center px-0 ' style={{ top: "-25px", right: "-18px" }}>{favList.length}</div>
                </div>
                <div className='relative'><img src={Cart1} onClick={() => goToCart()} />
                    <div className='absolute w-5 h-5  bg-red-500 rounded-full badge text-center px-0 ' style={{ top: "-20px", right: "-18px" }}>{cart.totalQuantity}</div>

                </div>
            </div>
        </nav >

    </>);
}

export default Nav;