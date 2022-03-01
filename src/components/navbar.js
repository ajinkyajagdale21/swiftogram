import React from "react";
import SwiftogramLogo from "../svg/swiftogram.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full flex flex-col justify-around items-center md:flex-row ">
      <img src={SwiftogramLogo} alt="swiftogram-logo" />
      <div className="flex pt-2 md:pt-0">
        <Link to="/">
          <i className="fa-solid fa-house fa-2x pr-5"></i>
        </Link>
        <i className="fa-solid fa-message fa-2x pr-5"></i>
        <i className="fa-solid fa-circle-plus fa-2x pr-5"></i>
        <a
          href="https://peachcart21.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa-solid fa-bag-shopping fa-2x pr-5"></i>
        </a>
        <a
          href="https://swiftflix.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          <i className="fa-solid fa-circle-play fa-2x pr-5"></i>
        </a>
        <Link to="/user">
          <i className="fa-solid fa-user fa-2x pr-5"></i>
        </Link>
      </div>
    </nav>
  );
};
