import React from "react";
import SwiftogramLogo from "../svg/swiftogram.svg";

export const Navbar = () => {
  return (
    <nav className="w-full flex flex-col justify-around items-center md:flex-row ">
      <img src={SwiftogramLogo} alt="swiftogram-logo" />
      <div className="flex pt-2 md:pt-0">
        <i className="fa-solid fa-house fa-2x pr-5"></i>
        <i className="fa-solid fa-message fa-2x pr-5"></i>
        <i className="fa-solid fa-circle-plus fa-2x pr-5"></i>
        <i className="fa-solid fa-user fa-2x pr-5"></i>
      </div>
    </nav>
  );
};
