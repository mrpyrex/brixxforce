import React, { Fragment } from "react";
import Carousel from "./Carousel";
import HomeAbout from "./HomeAbout";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Contact from "../Contact";

const Homepage = () => {
  return (
    <Fragment>
      <Carousel />
      <HomeAbout />
      <Services />
      <WhyUs />
      <Contact />
    </Fragment>
  );
};

export default Homepage;
