import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div>
        <img
          src="/swiftogram-img.png"
          alt="banner"
          className="hidden lg:block h-96"
        />
      </div>
      <div className="flex flex-col px-4 text-center w-11/12 h-96 lg:w-4/12">
        <h1 className="text-4xl pb-2 font-bold">swiftogram</h1>
        <h1 className="text-2xl pb-2 font-bold text-pink-600">
          Sign up to your Account
        </h1>
        <input
          placeholder="Enter your first name"
          className="m-1 p-2 rounded-lg outline-none"
        />
        <input
          placeholder="Enter your last name"
          className="m-1 p-2 rounded-lg outline-none"
        />
        <input
          placeholder="Enter email"
          className="m-1 p-2 rounded-lg outline-none"
        />
        <input
          placeholder="Enter password"
          className="m-1 p-2 rounded-lg outline-none"
        />
        <input
          placeholder="Re-enter password"
          className="m-1 p-2 rounded-lg outline-none"
        />
        <button className="bg-pink-500 rounded-lg m-2 p-2 text-white font-bold text-xl">
          Sign up
        </button>
        <p className="m-2">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-pink-600 font-bold">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
