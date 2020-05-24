import React, { Fragment } from "react";

import "./App.css";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import HomeAbout from "./components/HomeAbout";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <Fragment>
      <Header />
      <Carousel />
      <HomeAbout />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
