import React from "react";

import port from "../../img/port.jpg";
import port1 from "../../img/port1.jpg";
import port2 from "../../img/port2.jpg";
import port3 from "../../img/port3.jpg";
import port4 from "../../img/port4.jpg";

const Portfoliopage = () => {
  return (
    <div id="portfolio" className="container">
      <h2 className="text-center my-4">Our Recent Projects</h2>
      <div className="row">
        <div className="col-md-3">
          <div class="card">
            <img src={port} alt="..." />
          </div>
        </div>
        <div className="col-md-3">
          <div class="card">
            <img src={port1} alt="..." />
          </div>
        </div>
        <div className="col-md-3">
          <div class="card">
            <img src={port2} alt="..." />
          </div>
        </div>
        <div className="col-md-3">
          <div class="card">
            <img src={port3} alt="..." />
          </div>
        </div>
        <div className="col-md-3">
          <div class="card">
            <img src={port4} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoliopage;
