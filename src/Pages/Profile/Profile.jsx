import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
//   const userDetails = useSelector((state) => state.auth.userDetails);
//   console.log(userDetails);
const userDetails = JSON.parse(localStorage.getItem("userDetails"));
console.log(userDetails);

  const [formData, setFormData] = useState({
    firstName: userDetails?.name?.split(' ')[0] || '',
    lastName: userDetails?.name?.split(' ')[1] || '',
    email: userDetails?.email || '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    // Only validate passwords if any password field is filled
    if (formData.currentPassword || formData.newPassword || formData.confirmPassword) {
      if (!formData.currentPassword) newErrors.currentPassword = 'Current password is required';
      if (!formData.newPassword) newErrors.newPassword = 'New password is required';
      else if (formData.newPassword.length < 6) newErrors.newPassword = 'Password must be at least 6 characters';
      if (formData.newPassword !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      // Here you would typically make an API call to update the user profile
      const updatedUserDetails = {
        ...userDetails,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        address: formData.address
      };
      
      // Update localStorage
      localStorage.setItem('userDetails', JSON.stringify(updatedUserDetails));
      
      // Show success message or redirect
      alert('Profile updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-3 items-center mb-4 md:mb-0">
              <button 
                onClick={() => navigate("/")} 
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                Home
              </button>
              <span className="text-gray-400">/</span>
              <button className="font-medium text-gray-800">My Account</button>
            </div>
            <div className="text-lg">
              <span className="text-gray-600">Welcome! </span>
              <span className="text-red-600 font-semibold">{userDetails.name}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-gray-800 mb-3">Manage My Account</p>
                  <ul className="space-y-2">
                    <li className="text-red-600 font-medium cursor-pointer hover:text-red-700 transition-colors duration-200">My Account</li>
                    <li className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200">Address Book</li>
                    <li className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200">My Payment Options</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-3">My Orders</p>
                  <ul className="space-y-2">
                    <li className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200">My Returns</li>
                    <li className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200">My Cancellations</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-3">My Wishlist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Your Profile</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200`}
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200`}
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200`}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tanta, Egypt"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Password Changes</h3>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="password"
                        id="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          errors.currentPassword ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200`}
                        placeholder="Current Password"
                      />
                      {errors.currentPassword && (
                        <p className="mt-1 text-sm text-red-500">{errors.currentPassword}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="password"
                        id="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          errors.newPassword ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200`}
                        placeholder="New Password"
                      />
                      {errors.newPassword && (
                        <p className="mt-1 text-sm text-red-500">{errors.newPassword}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="password"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200`}
                        placeholder="Confirm Password"
                      />
                      {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                      </span>
                    ) : (
                      'Save Changes'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
