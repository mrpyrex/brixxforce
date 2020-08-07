import React from "react";
import img1 from "../../../img/img1.jpg";
import img2 from "../../../img/img2.jpg";
import img3 from "../../../img/img3.jpg";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} alt="Construction" />
          <div className="overlay">
            <div className="carousel-caption">
              <h3>We Are Certified Builders</h3>

              <h1 className="second_heading">General Construction Services</h1>
              <p>
                We provide day-to-day material, labor, equipment and services to
                complete your construction projects timely and cost effectively
              </p>
              <Link to="/about-us" className="btn know_btn">
                know more
              </Link>
              <Link to="/our-works" className="btn know_btn">
                view project
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} alt="Construction" />
          <div className="overlay">
            <div className="carousel-caption">
              <h3>We Are Certified Builders</h3>

              <h1 className="second_heading">Building Consultant Services</h1>
              <p>
                We deliver commecial buildings, acquisition surveys, office
                designs and project management.
              </p>
              <Link to="/about-us" className="btn know_btn">
                know more
              </Link>
              <Link to="/our-works" className="btn know_btn">
                view project
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} alt="Construction" />
          <div className="overlay">
            <div className="carousel-caption">
              <h3>We Are Certified Builders</h3>

              <h1 className="second_heading">Property Developers</h1>
              <p>
                We carry out renovations and re-lease of existing properties
              </p>
              <Link to="/about-us" className="btn know_btn">
                know more
              </Link>
              <Link to="/our-works" className="btn know_btn">
                view project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
