import React from "react";

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div>
        <img
          src="/swiftogram-img.png"
          alt="banner"
          className="hidden lg:block h-96"
        />
      </div>
      <div className="flex flex-col px-4 text-center w-10/12 h-96 lg:w-4/12">
        <h1 className="text-4xl pb-2 font-bold">swiftogram</h1>
        <h1 className="text-2xl pb-2 font-bold text-pink-600">
          Login to your Account
        </h1>
        <input
          placeholder="Enter email"
          className="m-1 p-2 rounded-lg outline-none"
        />
        <input
          placeholder="enter password"
          className="m-1 p-2 rounded-lg outline-none"
        />
        <button className="border-2 bg-pink-500 rounded-lg m-2 p-2 text-white font-bold text-xl hover:bg-white hover:text-pink-500 hover:border-pink-600">
          Login
        </button>
        <p className="font-bold">OR</p>
        <button className="border-2 bg-white rounded-lg m-1 p-2 font-bold text-xl">
          <i className="fa-brands fa-google"></i> Login with Google
        </button>
        <button className="border-2 bg-blue-600 text-white rounded-lg m-1 p-2 font-bold text-xl">
          <i className="fa-brands fa-facebook"></i> Login with Facebook
        </button>
      </div>
    </div>
  );
};
