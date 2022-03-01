import React from "react";

export const Post = () => {
  return (
    <div className="bg-white w-11/12 lg:w-2/5 my-4">
      <div className="flex items-center p-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
          alt="chelsea"
          className="w-10 rounded-full my-1 mx-3"
        />
        <p className="font-bold">chelseafc</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="football ground"
        className="w-full"
      />
      <div className="m-3">
        <i className="fa-regular fa-heart text-2xl mr-5"></i>
        <i className="fa-regular fa-comment text-2xl"></i>
        <p className="my-1 font-semibold">100 likes</p>
        <span className="flex">
          <p className="font-semibold"> chelseafc </p>
          <p className="mx-1">Are you ready?</p>
        </span>
        <p className="text-slate-500">view comments</p>
        <small className="text-slate-500">12 HOURS AGO</small>
      </div>
      <input
        placeholder="Add a comment..."
        className="w-10/12 mx-2 mb-2 outline-none p-1"
      />
      <button className="text-blue-600 font-semibold">post</button>
    </div>
  );
};
