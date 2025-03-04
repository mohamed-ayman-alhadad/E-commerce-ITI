import React from "react";
import style from "./Contact.module.css";
import { useNavigate } from "react-router-dom";
import icon_phone from "../../assets/Images/icons-phone.png";
import icon_email from "../../assets/Images/icons-mail.png";
import { toast, ToastContainer } from "react-toastify";

function Contact() {
  const navigate = useNavigate();
  const sentMessage = () => {
    toast.success("Message sent successfully",
      {
        theme: "colored",
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  }
  return (
    <>
    <ToastContainer/>
      <div className="container">
        <div className="flex gap-3 my-5 ">
          <button onClick={() => navigate("/")} className="text-gray-400">
            Home
          </button>
          <span>/</span>
          <button className="font-medium">Contact</button>
        </div>

        <div className="flex gap-3">
          <div className="w-25 p-4 shadow-sm">
            <div className="flex gap-2 items-center mb-4">
              <img src={icon_phone} alt="phone" />
              <p className="mb-0 font-medium">Call To Us</p>
            </div>
            <p className="text-sm">We are available 24/7, 7 days a week.</p>
            <p className="text-sm border-b pb-4 border-gray-300">
              Phone: +8801611112222
            </p>

            <div className="flex gap-2 items-center my-4 ">
              <img src={icon_email} alt="phone" />
              <p className="mb-0 font-medium">Write To US</p>
            </div>
            <p className="text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
          <div className="w-75 shadow-sm p-5 ">
            <div className="flex w-100 gap-3 justify-center mb-4">
              <div className=" w-70 ">
                <input
                  type="text"
                  id="name"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className=" w-70">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className=" w-70">
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Phone"
                  required
                />
              </div>
            </div>

            <form className="w-100  mx-auto">
              <textarea
                id="message"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </form>
            <div className="flex justify-end">
              <button
              onClick={()=>sentMessage()}
               className="text-white rounded mt-4  bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm w-full sm:w-auto px-5 py-3 text-center">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
