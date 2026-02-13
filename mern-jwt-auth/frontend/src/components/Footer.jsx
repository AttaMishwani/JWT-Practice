import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-400 ">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-3">
              Atta
            </h2>
            <p className="text-sm">
              Learning MERN stack and building modern web applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: atta@example.com</li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Atta. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
