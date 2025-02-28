import React, { useState } from "react";
import style from "./SingUp.module.css";
import sideImage from "../../assets/Images/Side_Image.png";
import google from "../../assets/Images/Icon-Google.png";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import instance from "../../Utils/axiosInstance";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import { Spinner } from "react-bootstrap";
import { login, setUserDetails } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
function SingUp() {
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be at most 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      ),
    phone: Yup.string()
      .required("Phone number is required")
      .min(11, "Phone number must be at least 11 characters")
      .max(11, "Phone number must be at most 11 characters")
      .matches(/^01[0125][0-9]{8}$/, "Phone number is invalid"),
    rePassword: Yup.string()
      .required("Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const handleRegister = async (values) => {
    setLoading(true);
    console.log(values, "values");
    await instance
      .post("/auth/signup", values)
      .then( (res)=> {
      
        if (res.data.message === "success") {
          setLoading(false); 
          navigate("/login");
          localStorage.setItem("user", res.data.token);
          localStorage.setItem("userDetails", JSON.stringify(res.data.user));
          console.log(res.data.token);
          dispatch(login(res.data.token));
          dispatch(setUserDetails(res.data.user));
          
        }
      })
      .catch((api) => {
        setLoading(false);
        setApiError(api.response.data.message);
        console.log(api.response.data.message);
      });
  };

  let Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      rePassword: "",
    },
    onSubmit: handleRegister,
    validationSchema: validationSchema,
  });
  return (
    <>
      <div className="flex mt-5 gap-5">
        <div className="w-50  sticky top-0 h-screen overflow-y-auto " style={{scrollbarWidth:"none"}} >
          <img src={sideImage} alt="sideImage" className="w-full" />
        </div>
        <div className="w-50 px-5 flex flex-col justify-center ">
          {apiError && <ErrorAlert error={apiError} />}
          <h1 className="mb-3">Create an account</h1>
          <p className="mb-5">Enter your details below</p>

          <form onSubmit={Formik.handleSubmit} className="max-w-md">
            <div className="relative z-0 w-full mb-4 border-b border-gray-300 group">
              <input
                onBlur={Formik.handleBlur}
                onChange={Formik.handleChange}
                value={Formik.values.name}
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            {Formik.touched.name && Formik.errors.name && (
              <ErrorAlert error={Formik.errors.name} />
            )}
            <div className="relative z-0 w-full mb-4 border-b border-gray-300 group">
              <input
                onChange={Formik.handleChange}
                value={Formik.values.email}
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            {Formik.touched.email && Formik.errors.email && (
              <ErrorAlert error={Formik.errors.email} />
            )}
            <div className="relative z-0 w-full mb-4 border-b border-gray-300 group">
              <input
                onChange={Formik.handleChange}
                value={Formik.values.password}
                type="password"
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            {Formik.touched.password && Formik.errors.password && (
              <ErrorAlert error={Formik.errors.password} />
            )}
            <div className="relative z-0 w-full mb-4 border-b border-gray-300 group">
              <input
                onChange={Formik.handleChange}
                value={Formik.values.phone}
                type="phone"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone
              </label>
            </div>
            {Formik.touched.phone && Formik.errors.phone && (
              <ErrorAlert error={Formik.errors.phone} />
            )}
            <div className="relative z-0 w-full mb-4 border-b border-gray-300 group">
              <input
                onChange={Formik.handleChange}
                value={Formik.values.rePassword}
                type="password"
                name="rePassword"
                id="rePassword"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="rePassword"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                rePassword
              </label>
            </div>
            {Formik.touched.rePassword && Formik.errors.rePassword && (
              <ErrorAlert error={Formik.errors.rePassword} />
            )}

            <button
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              type="submit"
              className="w-full rounded mb-3 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium  text-sm px-5 py-3 text-center"
            >
              {loading ?<Spinner /> :
              "Create Account"}
            </button>
            {/* {apiError !== null && (
              <div
                id="popup-modal"
                tabIndex="-1"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <button
                      type="button"
                      className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="popup-modal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                      <svg
                        className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        {apiError}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
            <button className="w-full rounded mb-4 border-1 px-5 py-3 text-center font-medium flex justify-center gap-2 ">
              <img src={google} alt="google" />
              Sign up with Google
            </button>

            <p className="text-center fs-5 flex justify-center ">
              Already have an account?{" "}
              <button
              type="button"
                onClick={() => navigate("/login")}
                className="text-red-600 px-3"
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SingUp;
