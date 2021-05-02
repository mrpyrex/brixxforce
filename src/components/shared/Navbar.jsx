import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      id="main-navbar"
      class="navbar navbar-expand-lg fixed navbar-light bg-light"
    >
      <div className="container">
        <Link class="navbar-brand" to="/">
          BrixxFauce
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-menu"
          aria-controls="navbar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-menu">
          <div class="navbar-nav ml-auto">
            <Link class="nav-item nav-link" to="/about-us">
              About Us
            </Link>
            <Link class="nav-item nav-link" to="/our-services">
              Services
            </Link>
            <Link class="nav-item nav-link" to="/our-works">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
