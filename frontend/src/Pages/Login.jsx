import React from "react";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-200">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white">Welcome Back</h1>
          <p className="mt-2 text-slate-400">
            Login to your E-KagajPatra account
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-400">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-blue-400 hover:text-blue-300"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-700"></div>
          <span className="text-sm text-slate-500">or</span>
          <div className="h-px flex-1 bg-slate-700"></div>
        </div>

        {/* Register */}
        <p className="text-center text-sm text-slate-400">
          Don’t have an account?{" "}
          <Link
            to="/auth/register"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
