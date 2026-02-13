import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Build Modern Web Apps 🚀
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          A dummy home page designed with a clean dark theme using
          React and Tailwind CSS. Perfect for MERN practice projects.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition">
            Get Started
          </button>
          <button className="border border-gray-600 hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">⚡ Fast</h3>
            <p className="text-gray-400">
              Optimized structure with modern tools and best practices.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🎨 Modern UI</h3>
            <p className="text-gray-400">
              Clean dark theme with responsive layouts using Tailwind.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🔐 Secure</h3>
            <p className="text-gray-400">
              Built with authentication and scalable architecture in mind.
            </p>
          </div>

        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to start building?
        </h2>
        <p className="text-gray-400 mb-6">
          This is just a dummy page — customize it however you want.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-semibold transition">
          Explore Now
        </button>
      </div>

    </section>
  );
};

export default Home;
