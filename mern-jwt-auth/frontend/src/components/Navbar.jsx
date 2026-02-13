import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";


const Navbar = () => {

  const {isLoggedIn} = useAuth();
  return (
    <header className="bg-blue-950 border-b  border-gray-800">
      <div className="container max-w-325   mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white text-2xl  font-bold tracking-wide">
          <NavLink to="/">Atta</NavLink>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6 text-gray-300 font-medium">
            
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition hover:text-white ${
                    isActive ? "text-white border-b-2 border-white" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition hover:text-white ${
                    isActive ? "text-white border-b-2 border-white" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `transition hover:text-white ${
                    isActive ? "text-white border-b-2 border-white" : ""
                  }`
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition hover:text-white ${
                    isActive ? "text-white border-b-2 border-white" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>

            {isLoggedIn ?      <li>
              <NavLink
                to="/logout"
                className="px-4 py-2 rounded-lg  text-black  transition"
              >
                Logout
              </NavLink>
            </li> : <>     <li>
              <NavLink
                to="/register"
                className="px-4 py-2 rounded-lg  text-black  transition"
              >
                Register
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
              >
                Login
              </NavLink>
            </li></>  }


       

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
