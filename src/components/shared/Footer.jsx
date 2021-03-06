import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <p>
                With over 10 years of experience in construction, we partner
                with owners and design professionals to build high-quality
                projects.
              </p>
              <ul className="social">
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
                <li>
                  <i className="fab fa-facebook"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-4">
              <ul className="address">
                <li>
                  <i className="far fa-clock mr-2"></i>Mon - Fri: 8.00am -
                  6.00pm
                </li>
                <li>
                  <i className="far fa-building mr-2"></i> 35, UDOSEN UKO
                  STREET, UYO, AKWA IBOM STATE{" "}
                </li>
                <li>
                  <i className="fas fa-phone-alt mr-2"></i> +234 703 1544 366,
                  +234 802 851 1697
                </li>

                <li>
                  <i className="far fa-envelope mr-2"></i>
                  support@brixxfauceltd.com
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-4">
              <form className="form-inline">
                <label
                  className="sr-only"
                  htmlFor="inlineFormInputGroupUsername2"
                >
                  Username
                </label>
                <div className="input-group mb-2 mr-sm-2">
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Email"
                  />
                  <div className="input-group-prepend">
                    <button type="submit" className="btn btn-primary ">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="container text-center">
          BrixxFauce Limited &copy; {new Date().getFullYear()}. All Rights
          Reserved.
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
