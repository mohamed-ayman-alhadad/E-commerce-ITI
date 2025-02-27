import { useDispatch } from "react-redux";
import remove from "../../assets/Images/remove.png";
import { decrement, increment, removeFromCart } from "../../redux/slices/cartSlice";

function CartItem({ product }) {

    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product));
    }

    const handleIncreament = () => {
        dispatch(increment(product));
    }
    const hamdleDecreament = () => {
        dispatch(decrement(product));
    }

    

    
    return (<>
        <div className="d-flex justify-between shadow-sm items-center mb-5 text-center relative ">
            <div onClick={() => handleRemoveFromCart(product)} className="absolute bg-red-600 top-1 left-1 w-5 h-5 z-1 rounded-4xl flex justify-center items-center"><img src={remove} className="w-3 h-3" /></div>
            <div className="ps-4 flex gap-1 items-center text-sm w-25 fw-bold "><img src={product.imageCover} className="w-12 h-15" />{product.title}</div>
            <div className="p-4 w-25 ">${product.price}</div>
            <div className="p-4 w-25 flex justify-center">

                <div className="relative flex items-center max-w-[8rem]">
                    <button onClick={() => hamdleDecreament()} type="button" id="decrement-button"
                        data-input-counter-decrement="quantity-input"
                        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <input type="text" id="quantity-input"
                        data-input-counter
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={product.cartQuantity}
                      ></input>
                    <button onClick={() => handleIncreament()} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>

            </div>
            <div className="p-4 w-25 ">${product.price * product.cartQuantity}</div>
        </div>
    </>);
}

export default CartItem;