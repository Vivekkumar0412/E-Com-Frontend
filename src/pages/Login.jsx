import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login.webp"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLoginSubmit(e){
    e.preventDefault()
    let obj = {
        email,
        password
    };
    console.log(obj)
  }
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
            onSubmit={handleLoginSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Vivek</h2>
          </div>
          <h2 className="text-2xl text-center mb-6 font-bold">Hey There! 👋</h2>
          <p className="text-center mb-6 ">
            Enter your username and passowrd to login
          </p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter Your Passowrd"
            />
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
            type="submit"
          >
            Sign In
          </button>
          <p className="mt-6 text-center text-sm">
            Dont't have an account ?
            <Link to="/register" className="text-blue-500">
              Rigister
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full felx flex-col justify-center items-center">
            <img src={loginImg} alt="loginImg" className="h-[750px] w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Login;
