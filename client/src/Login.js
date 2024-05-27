import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./store/auth";
import { toast } from "react-toastify";
const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const { storeTokenInLs } = useAuth();
  const navigate = useNavigate();
  const handleinput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setuser({
      ...user,
      [name]: value,
    });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
console.log("object",res_data)
      if (response.ok) {
        // localStorage.setItem("token",res_data.token)
        storeTokenInLs(res_data.token);
        setuser({
          email: "",
          password: "",
        });
        navigate("/products");
        toast.success("Login Successfull");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("login", error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleinput}
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleinput}
              id="password"
              placeholder="Enter your password"
              autoComplete="off"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
