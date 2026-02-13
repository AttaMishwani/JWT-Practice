import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

const URL = "http://localhost:5000/api/auth/login";
const Login = () => {

  const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

  const [user, setUser] = useState({
    username : "",
    email:"",
    password:""
  });

  const handleInputChange = (e)=>{

    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user ,
      [name]:value
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch(URL  , {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
      }
    )

    const data = await response.json();


  
     if(response.ok){
      alert("login successfull");
  console.log("login response data : " , data)
   storeTokenInLS(data.token);
navigate("/")
      }else{
        alert("invalid credentials")
      }
    } catch (error) {
      console.log(error)
    }


  }
  
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-400 mb-6 text-center">
          Login to your account
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleFormSubmit}>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-gray-300 mb-1">
              Username
            </label>
            <input
            name="username"
            value={user.username}
            onChange={handleInputChange}
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Email
            </label>
            <input
            value={user.email}
            onChange={handleInputChange}
            name="email"
              type="email"
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
            value={user.password}
              type="password"
              name="password"
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
            Login
          </button>

          {/* Register Link */}
          <p className="text-gray-400 text-sm text-center">
            Don’t have an account?
            <span className="text-indigo-400 cursor-pointer hover:underline ml-1">
              Register
            </span>
          </p>

        </form>
      </div>
    </section>
  );
};

export default Login;
