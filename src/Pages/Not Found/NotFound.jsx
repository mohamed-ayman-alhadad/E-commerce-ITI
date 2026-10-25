import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-container flex min-h-[58vh] flex-col items-center justify-center py-16 text-center">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="mt-3 text-6xl font-semibold tracking-tight sm:text-8xl">Lost your way?</h1>
      <p className="mt-4 max-w-md text-gray-600">
        The page you’re looking for may have moved or no longer exists.
      </p>
      <Link to="/" className="primary-action mt-5">Back to home</Link>
    </section>
  );
}
