import React from "react";
import service1 from "../img/service1.png";
import service2 from "../img/service2.png";
import service3 from "../img/service3.png";
import service4 from "../img/service4.png";

const Services = () => {
  return (
    <section className="text-center" id="home-services">
      <h2>Our Services</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={service1} alt="" />
            <h5>Architectural Design</h5>
          </div>
          <div className="col-md-3">
            <img src={service2} alt="" />
            <h5>Building Consultants</h5>
          </div>
          <div className="col-md-3">
            <img src={service3} alt="" />
            <h5>Interior/Exterior Designs</h5>
          </div>
          <div className="col-md-3">
            <img src={service4} alt="" />
            <h5>Property Developers</h5>
          </div>
        </div>
        <button className="btn know_btn my-4">learn more</button>
      </div>
    </section>
  );
};

export default Services;
