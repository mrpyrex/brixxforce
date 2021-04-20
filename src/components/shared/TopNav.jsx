import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <ul id="top-nav" className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link">
          <i className="far fa-envelope mr-2"></i>
          support@brixxfauceltd.com
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">
          <i className="fas fa-phone-alt mr-2"></i>
          +234 703 1544 366, +234 802 851 1697
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">
          <i className="far fa-clock mr-2"></i> Mon - Sat, 9:00 - 19:00
        </Link>
      </li>
    </ul>
  );
};

export default TopNav;
