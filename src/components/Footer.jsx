import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>
              With over 10 years of experience in construction, we partner with
              owners and design professionals to build high-quality projects.
            </p>
            <ul>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
              <li>
                <i class="fab fa-facebook"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>
                <i className="far fa-clock mr-2"></i>Mon - Fri: 8.00am - 6.00pm
              </li>
              <li>
                <i class="far fa-building mr-2"></i> 35, UDOSEN UKO STREET, UYO,
                AKWA IBOM STATE{" "}
              </li>
              <li>
                <i className="fas fa-phone-alt mr-2"></i> +234 703 1544 366,
                +234 802 851 1697
              </li>
              <li>support@brixxforce.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <form class="form-inline">
              <label class="sr-only" for="inlineFormInputGroupUsername2">
                Username
              </label>
              <div class="input-group mb-2 mr-sm-2">
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroupUsername2"
                  placeholder="Email"
                />
                <div class="input-group-prepend">
                  <button type="submit" class="btn btn-primary ">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
