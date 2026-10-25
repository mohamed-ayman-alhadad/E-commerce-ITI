import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserDetails } from "../../redux/slices/authSlice";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(() => ({
    firstName: userDetails?.name?.split(" ")[0] || "",
    lastName: userDetails?.name?.split(" ").slice(1).join(" ") || "",
    email: userDetails?.email || "",
    address: userDetails?.address || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  }));

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
    setError("");
    setNotice("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setNotice("");

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError("Please enter your first and last name.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (formData.currentPassword || formData.newPassword || formData.confirmPassword) {
      setError("Password changes are not connected to the account service yet.");
      return;
    }

    const updatedUser = {
      ...userDetails,
      name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      email: formData.email.trim(),
      address: formData.address.trim(),
    };
    localStorage.setItem("userDetails", JSON.stringify(updatedUser));
    dispatch(setUserDetails(updatedUser));
    setNotice("Profile details saved in this browser. They are not synced to the account service.");
  };

  if (!userDetails) {
    return (
      <section className="page-container flex min-h-[55vh] flex-col items-center justify-center py-16 text-center">
        <p className="eyebrow">Your account</p>
        <h1 className="section-heading mt-1">Log in to view your account</h1>
        <Link to="/login" className="primary-action mt-5">Log in</Link>
      </section>
    );
  }

  const inputClass = "mt-2 min-h-12 w-full rounded border border-gray-300 px-3";

  return (
    <div className="page-container py-10">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
        <Link to="/" className="text-inherit no-underline hover:underline">Home</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-gray-900">My account</span>
      </nav>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
        <aside>
          <p className="mb-3 text-sm font-semibold">Manage account</p>
          <nav className="flex gap-4 text-sm lg:flex-col" aria-label="Account navigation">
            <span className="font-semibold text-red-800">Profile</span>
            <Link to="/wishlist" className="text-gray-600 no-underline hover:text-gray-900">Wishlist</Link>
            <Link to="/cart" className="text-gray-600 no-underline hover:text-gray-900">Cart</Link>
          </nav>
        </aside>

        <section className="rounded-lg border border-gray-200 p-5 sm:p-8" aria-labelledby="profile-title">
          <p className="eyebrow mb-2">Account settings</p>
          <h1 id="profile-title" className="section-heading mb-6">Edit your profile</h1>
          {error && <p className="mb-4 rounded bg-red-50 p-3 text-sm text-red-800" role="alert">{error}</p>}
          {notice && <p className="mb-4 rounded bg-emerald-50 p-3 text-sm text-emerald-800" role="status">{notice}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">
                First name
                <input name="firstName" value={formData.firstName} onChange={handleChange} autoComplete="given-name" className={inputClass} required />
              </label>
              <label className="text-sm font-medium">
                Last name
                <input name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="family-name" className={inputClass} required />
              </label>
              <label className="text-sm font-medium">
                Email address
                <input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" className={inputClass} required />
              </label>
              <label className="text-sm font-medium">
                Address
                <input name="address" value={formData.address} onChange={handleChange} autoComplete="street-address" className={inputClass} />
              </label>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <h2 className="text-lg font-semibold">Password changes</h2>
              <p className="mt-1 text-sm text-gray-600">Password updates are not currently connected to the account service.</p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <label className="text-sm font-medium">
                  Current password
                  <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} autoComplete="current-password" className={inputClass} />
                </label>
                <label className="text-sm font-medium">
                  New password
                  <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} autoComplete="new-password" className={inputClass} />
                </label>
                <label className="text-sm font-medium">
                  Confirm new password
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} autoComplete="new-password" className={inputClass} />
                </label>
              </div>
            </div>

            <div className="flex flex-col-reverse justify-end gap-3 border-t border-gray-200 pt-5 sm:flex-row">
              <button type="button" onClick={() => navigate("/")} className="min-h-11 rounded border border-gray-300 px-5 text-sm font-medium hover:bg-gray-50">
                Cancel
              </button>
              <button type="submit" className="primary-action">Save changes</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Profile;
