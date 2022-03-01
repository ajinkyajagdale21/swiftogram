import React from "react";
import { Navbar } from "../components/navbar";
import { UserHeader } from "../components/userHeader";
import { UserPostLayout } from "../components/userPostLayout";

export const UserPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center my-3">
        <UserHeader />
      </div>

      <div className="flex justify-center my-3">
        <UserPostLayout />
      </div>
    </div>
  );
};
