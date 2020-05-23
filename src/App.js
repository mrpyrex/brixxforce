import React, { Fragment } from "react";

import "./App.css";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import HomeAbout from "./components/HomeAbout";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Carousel />
      <HomeAbout />
      {/* <Services /> */}
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
