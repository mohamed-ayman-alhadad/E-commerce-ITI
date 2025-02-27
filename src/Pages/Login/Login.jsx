import sideImage from "../../assets/Images/Side_Image.png";
function Login() {
    return ( <>
    <div className="flex mt-5 gap-5">
            <img src={sideImage} alt="sideImage" />
            <div className="w-50 px-5 flex flex-col justify-center ">
              <h1 className="mb-3">Log in to Exclusive</h1>
              <p className="mb-5">Enter your details below</p>
    
              <div className="max-w-md">
              
                <div className="relative z-0 w-full mb-4 border-b border-gray-300 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Enter your email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-4 border-b border-gray-300 group">
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div className="flex justify-between">
                  <button className="text-white bg-red-600 px-5 py-3 rounded hover:bg-red-700 font-medium">Login</button>
                  <button className="text-red-600">Forget Password</button>
                  </div>
    
              </div>
            </div>
          </div>
    </> );
}

export default Login;