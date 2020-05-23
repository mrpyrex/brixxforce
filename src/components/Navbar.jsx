import React from "react";

const Navbar = () => {
  return (
    <nav
      id="main-navbar"
      class="navbar navbar-expand-lg fixed navbar-light bg-light"
    >
      <div className="container">
        <a class="navbar-brand" href="#">
          BrixxForce
        </a>
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
            <a class="nav-item nav-link" href="#">
              About Us
            </a>
            <a class="nav-item nav-link" href="#">
              Services
            </a>
            <a class="nav-item nav-link" href="#">
              Portfolio
            </a>
            <a class="nav-item nav-link" href="#">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
