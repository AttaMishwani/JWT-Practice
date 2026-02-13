import React, { useState } from "react";
import illustration from "../assets/images/Team goals-rafiki.png";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/Auth";

const URL =   "http://localhost:5000/api/auth/register"


const Register = () => {

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

const [user , setUser] = useState({
  username : "",
  email : "",
  password:""
})

const handleInputChange = (e)=>{
const name = e.target.name;
const value = e.target.value;

setUser({
  ...user,
  [name]:value
});

}

const handleSubmit = async (e) => {
  console.log("submit button clicked")
  e.preventDefault();

  try {
     const response = await fetch(URL, {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(user)
  })

   const data = await response.json();
   console.log(data)

   if(response.ok){
console.log("response data : " ,data);

   storeTokenInLS(data.token);
    setUser({
  username : "",
  email : "",
  password:""
})
   }


   navigate("/login")

  } catch (error) {
    console.log(error)
  }

 

}

  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-gray-800 rounded-2xl border-2 border-blue-600 shadow-lg overflow-hidden flex flex-col md:flex-row">

        {/* LEFT SIDE – Illustration */}
        <div className="md:w-1/2 bg-gray-900 flex items-center justify-center p-6">
          <img
            src={illustration}
            alt="Register Illustration"
            className="w-full max-w-2xl"
          />
        </div>

        {/* RIGHT SIDE – Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Create Account
          </h2>
          <p className="text-gray-400 mb-6">
            Join us and start your journey
          </p>

          <form className="space-y-5"       onSubmit={handleSubmit}>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-gray-300 mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={user.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                    value={user.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                    value={user.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Button */}
            <button
      
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Register
            </button>

            {/* Login Link */}
            <p className="text-gray-400 text-sm text-center">
              Already have an account?
              <span className="text-indigo-400 cursor-pointer hover:underline ml-1">
                Login
              </span>
            </p>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
