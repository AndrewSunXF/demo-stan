import React from "react";
import logo from "../../../images/logo.svg";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = ["Home", "TV Shows", "Movies"];
  return (
    <header className="header-wrapper">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <nav className="nav-container">
        {navItems.map((item, index) => (
          <Link to="/" className="nav-link" key={index}>
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
