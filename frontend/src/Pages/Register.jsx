import React from "react";
import { Link } from "react-router";

export default function Register() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-slate-200">
      <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white">Create Account</h1>
          <p className="mt-2 text-slate-400">
            Register to use E-KagajPatra services
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
