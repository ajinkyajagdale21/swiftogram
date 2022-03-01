import React from "react";

export const UserHeader = () => {
  return (
    <div className="w-10/12 lg:w-4/6 my-4 ">
      <div className="flex flex-col lg:flex-row">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
          alt="chelsea"
          className="w-1/6 rounded-full mr-1 lg:mr-20"
        />
        <div>
          <div className="flex mt-3">
            <p className="text-3xl lg:text-4xl">chelseafc</p>
            <button className="lg:text-lg outline outline-2 outline-slate-500 font-semibold ml-5 px-2">
              Edit Profile
            </button>
          </div>
          <div className="my-4 flex text-center">
            <p className="mr-5 font-semibold">15 posts</p>
            <p className="mr-5 font-semibold">32.5m followers</p>
            <p className="mr-5 font-semibold">126 following</p>
          </div>
          <p className="font-semibold">Chelsea FC</p>
          <p>Champions of world !!</p>
        </div>
      </div>
      <div className="h-0.5 text-center bg-slate-700 mt-7"></div>
    </div>
  );
};
