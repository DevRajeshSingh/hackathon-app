import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </nav>
  );
};
