import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
import sideImage from "../../assets/Images/Side_Image.png";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import instance from "../../Utils/axiosInstance";
import { login, setUserDetails } from "../../redux/slices/authSlice";

function Login() {
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Use at least one lowercase letter, one uppercase letter, one number, and one special character"
      ),
  });

  const handleLogin = async (values) => {
    setLoading(true);
    setApiError("");
    try {
      const response = await instance.post("/auth/signin", values);
      if (response.data.message !== "success") {
        throw new Error(response.data.message || "Sign in was unsuccessful.");
      }

      localStorage.setItem("user", response.data.token);
      localStorage.setItem("userDetails", JSON.stringify(response.data.user));
      dispatch(login(response.data.token));
      dispatch(setUserDetails(response.data.user));
      navigate("/");
    } catch (error) {
      setApiError(
        error.response?.data?.message ||
          error.message ||
          "We couldn’t sign you in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: handleLogin,
    validationSchema,
  });

  return (
    <div className="page-container grid min-h-[65vh] grid-cols-1 items-center gap-10 py-10 md:grid-cols-2">
      <div className="hidden overflow-hidden rounded-lg bg-stone-100 md:block">
        <img src={sideImage} alt="" className="h-[520px] w-full object-cover" />
      </div>
      <section className="mx-auto w-full max-w-md" aria-labelledby="login-title">
        <p className="eyebrow mb-2">Welcome back</p>
        <h1 id="login-title" className="section-heading">Log in to your account</h1>
        <p className="mt-2 mb-6 text-gray-600">Enter your details below to continue shopping.</p>
        {apiError && <ErrorAlert error={apiError} />}

        <form onSubmit={formik.handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={Boolean(formik.touched.email && formik.errors.email)}
              className="min-h-12 w-full rounded border border-gray-300 px-3"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-700" role="alert">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={Boolean(formik.touched.password && formik.errors.password)}
              className="min-h-12 w-full rounded border border-gray-300 px-3"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-red-700" role="alert">{formik.errors.password}</p>
            )}
          </div>
          <button type="submit" disabled={loading} className="primary-action w-full disabled:cursor-wait disabled:opacity-70">
            {loading ? <><Spinner size="sm" className="me-2" /> Signing in…</> : "Log in"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          New here? <Link to="/sing up" className="font-semibold text-red-800 underline underline-offset-4">Create an account</Link>
        </p>
        <p className="mt-3 text-center text-sm text-gray-600">
          Need help? <Link to="/contact" className="underline underline-offset-4">View contact page</Link>
        </p>
      </section>
    </div>
  );
}

export default Login;
