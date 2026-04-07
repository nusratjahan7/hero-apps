import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        
        {/* Error Code */}
        <h1 className="text-7xl font-bold text-gray-800">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/"
            className="px-5 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>

        {/* Extra small text */}
        <p className="text-xs text-gray-400 mt-6">
          Error code: 404 • Not Found
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;