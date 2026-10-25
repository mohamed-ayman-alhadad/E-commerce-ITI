import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
import sideImage from "../../assets/Images/Side_Image.png";
import google from "../../assets/Images/Icon-Google.png";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import instance from "../../Utils/axiosInstance";
import { login, setUserDetails } from "../../redux/slices/authSlice";

function SignUp() {
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
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
        "Use at least one lowercase letter, one uppercase letter, one number, and one special character"
      ),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^01[0125][0-9]{8}$/, "Phone number is invalid"),
    rePassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handleRegister = async (values) => {
    setLoading(true);
    setApiError("");
    try {
      const response = await instance.post("/auth/signup", values);
      if (response.data.message !== "success") {
        throw new Error(response.data.message || "Registration was unsuccessful.");
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
          "We couldn’t create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", phone: "", rePassword: "" },
    onSubmit: handleRegister,
    validationSchema,
  });

  const fields = [
    { name: "name", label: "Full name", type: "text", autocomplete: "name" },
    { name: "email", label: "Email address", type: "email", autocomplete: "email" },
    { name: "password", label: "Password", type: "password", autocomplete: "new-password" },
    { name: "phone", label: "Phone number", type: "tel", autocomplete: "tel" },
    { name: "rePassword", label: "Confirm password", type: "password", autocomplete: "new-password" },
  ];

  return (
    <div className="page-container grid min-h-[65vh] grid-cols-1 items-center gap-10 py-10 md:grid-cols-2">
      <div className="hidden overflow-hidden rounded-lg bg-stone-100 md:block">
        <img src={sideImage} alt="" className="h-[560px] w-full object-cover" />
      </div>
      <section className="mx-auto w-full max-w-md" aria-labelledby="signup-title">
        <p className="eyebrow mb-2">Join Exclusive</p>
        <h1 id="signup-title" className="section-heading">Create your account</h1>
        <p className="mt-2 mb-6 text-gray-600">A few details and you’re ready to explore.</p>
        {apiError && <ErrorAlert error={apiError} />}
        <form onSubmit={formik.handleSubmit} noValidate className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="mb-2 block text-sm font-medium">{field.label}</label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                autoComplete={field.autocomplete}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(formik.touched[field.name] && formik.errors[field.name])}
                className="min-h-12 w-full rounded border border-gray-300 px-3"
              />
              {formik.touched[field.name] && formik.errors[field.name] && (
                <p className="mt-1 text-sm text-red-700" role="alert">{formik.errors[field.name]}</p>
              )}
            </div>
          ))}
          <button type="submit" disabled={loading} className="primary-action w-full disabled:cursor-wait disabled:opacity-70">
            {loading ? <><Spinner size="sm" className="me-2" /> Creating account…</> : "Create account"}
          </button>
        </form>
        <button type="button" disabled className="mt-3 flex min-h-11 w-full items-center justify-center gap-2 rounded border border-gray-300 text-sm text-gray-500" title="Google sign-up is not configured">
          <img src={google} alt="" className="h-5 w-5" />
          Google sign-up is not available
        </button>
        <p className="mt-5 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login" className="font-semibold text-red-800 underline underline-offset-4">Log in</Link>
        </p>
      </section>
    </div>
  );
}

export default SignUp;
