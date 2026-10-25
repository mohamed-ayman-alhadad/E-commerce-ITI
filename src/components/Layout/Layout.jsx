import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">
        <Suspense fallback={<p className="page-container py-16 text-center" role="status">Loading page…</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ToastContainer position="top-center" newestOnTop />
    </>
  );
}

export default Layout;
