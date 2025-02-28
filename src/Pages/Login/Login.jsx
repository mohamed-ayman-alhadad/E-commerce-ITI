import { useFormik } from "formik";
import sideImage from "../../assets/Images/Side_Image.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";
import instance from "../../Utils/axiosInstance";
import { Spinner } from "react-bootstrap";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import { useDispatch, useSelector } from "react-redux";
import { login, setUserDetails } from "../../redux/slices/authSlice";

function Login() {
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      ),
  });
  const handleLogin = async (values) => {
    setLoading(true);
    console.log(values, "values");
    await instance
      .post("/auth/signin", values)
      .then((api) => {
        if (api.data.message === "success") {
          setLoading(false);
          navigate("/");
          localStorage.setItem("user", api.data.token);
          localStorage.setItem("userDetails", JSON.stringify(api.data.user));
          console.log(api.data.token);
          console.log(api.data.user);
          dispath(login(api.data.token));
          dispath(setUserDetails(res.data.user));
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
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: validationSchema,
  });
  return (
    <>
      <div className="flex mt-5 gap-5">
        <img src={sideImage} alt="sideImage" />
        <div className="w-50 px-5 flex flex-col justify-center ">
          {apiError && <ErrorAlert error={apiError} />}
          <h1 className="mb-3">Log in to Exclusive</h1>
          <p className="mb-5">Enter your details below</p>

          <form onSubmit={Formik.handleSubmit} className="max-w-md">
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
                Enter your email
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
            <div className="flex justify-between">
              <button
                type="submit"
                className="text-white bg-red-600 px-5 py-3 rounded hover:bg-red-700 font-medium"
              >
                {loading ? <Spinner /> : "Login"}
              </button>
              <button type="button" className="text-red-600">
                Forget Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
