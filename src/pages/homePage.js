import React from "react";
import { Navbar } from "../components/navbar";
import { Post } from "../components/post";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center my-3">
        <Post />
      </div>
    </div>
  );
};
