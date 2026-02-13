import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-xl">

        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold text-indigo-500 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl font-bold text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <NavLink
            to="/"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition"
          >
            Go Home
          </NavLink>

          <NavLink
            to="/contact"
            className="px-6 py-3 border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-white rounded-lg transition"
          >
            Contact Support
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default Error;
