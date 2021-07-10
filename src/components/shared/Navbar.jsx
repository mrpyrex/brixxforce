import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      id="main-navbar"
      className="navbar navbar-expand-lg fixed navbar-light bg-light"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          BrixxFauce
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-menu"
          aria-controls="navbar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="navbar-nav ml-auto">
            <Link className="nav-item nav-link" to="/about-us">
              About Us
            </Link>
            {/* <Link className="nav-item nav-link" to="/our-services">
              Services
            </Link> */}
            <Link className="nav-item nav-link" to="/our-works">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
