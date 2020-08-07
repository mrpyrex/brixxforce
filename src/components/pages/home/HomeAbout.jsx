import React from "react";
import man from "../../../img/man.png";
import { Link } from "react-router-dom";
const HomeAbout = () => {
  return (
    <section>
      <div id="home-about" className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="about-content">
              <h2>Welcome To Brixxforce</h2>
              <p>
                Brixxforce Groups is a dynamic and efficient architectural and
                building construction firm that has been providing complete
                architectural design,buildingconstruction, master planning,
                landscaping and interior design servivces since 2010.
              </p>

              <Link to="/about-us" className="btn know_btn ">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <div class="about_banner">
              <img src={man} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
