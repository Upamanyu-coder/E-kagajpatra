import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-200">
      <section className="max-w-xl text-center">
        <h1 className="text-8xl font-extrabold text-blue-500">404</h1>

        <h2 className="mt-6 text-3xl font-bold text-white">Page Not Found</h2>

        <p className="mt-4 text-slate-400 leading-7">
          The page you are looking for does not exist or may have been moved.
          Please return to the homepage and continue using E-KagajPatra.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
          >
            Go Home
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-800"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
