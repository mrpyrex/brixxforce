import React from "react";

const TopNav = () => {
  return (
    <ul id="top-nav" className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="far fa-envelope mr-2"></i>
          support@brixxforce.com
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-phone-alt mr-2"></i>
          +234 800 238 4500
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="far fa-clock mr-2"></i> Mon - Sat 9:00 - 19:00
        </a>
      </li>
    </ul>
  );
};

export default TopNav;
