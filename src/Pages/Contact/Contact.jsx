import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [notice, setNotice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice("Message sending is not connected yet. Your message has not been submitted.");
  };

  return (
    <div className="page-container py-10">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
        <Link to="/" className="text-inherit no-underline hover:underline">Home</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-gray-900">Contact</span>
      </nav>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <section>
          <p className="eyebrow mb-2">We’re here to help</p>
          <h1 className="section-heading">Get in touch</h1>
          <p className="mt-3 max-w-md leading-7 text-gray-600">
            The contact form is ready for your message, but sending is not connected to a support service yet.
          </p>
          <div className="mt-7 rounded-lg border border-gray-200 p-5">
            <h2 className="font-semibold">Support</h2>
            <p className="mb-0 mt-2 text-sm leading-6 text-gray-600">
              Our contact form is currently being set up. Please check back soon for direct support options.
            </p>
          </div>
        </section>
        <section className="rounded-lg border border-gray-200 p-5 sm:p-8" aria-labelledby="contact-form-title">
          <h2 id="contact-form-title" className="mb-5 text-xl font-semibold">Write to us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Your name
                <input name="name" autoComplete="name" required className="mt-2 min-h-12 w-full rounded border border-gray-300 px-3" />
              </label>
              <label className="text-sm font-medium">
                Email address
                <input type="email" name="email" autoComplete="email" required className="mt-2 min-h-12 w-full rounded border border-gray-300 px-3" />
              </label>
            </div>
            <label className="block text-sm font-medium">
              Message
              <textarea name="message" rows="6" required className="mt-2 w-full rounded border border-gray-300 p-3" />
            </label>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="mb-0 text-xs text-gray-500">This form does not submit to a support service yet.</p>
              <button type="submit" className="primary-action">Send message</button>
            </div>
          </form>
          {notice && <p className="mt-4 text-sm text-amber-800" role="status">{notice}</p>}
        </section>
      </div>
    </div>
  );
}

export default Contact;
