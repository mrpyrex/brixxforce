import React from "react";
import illustration1 from "../img/illustration1.jpg";

const WhyUs = () => {
  return (
    <section id="why-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={illustration1} alt="" />
          </div>
          <div className="col-md-6 ">
            <h2 className="text-center">Why Choose Us?</h2>
            <ul>
              <li>We Deliver Quality</li>
              <li>Always On Time</li>
              <li>We Are Passionate</li>
              <li>Professional Services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
