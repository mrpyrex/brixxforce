import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./components/pages/home/Homepage";
import Header from "./components/shared/Header";
import Aboutpage from "./components/pages/Aboutpage";
import Portfoliopage from "./components/pages/Portfoliopage";
import Servicespage from "./components/pages/Servicespage";
import Footer from "./components/shared/Footer";
import AddProject from "./components/pages/admin/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about-us" component={Aboutpage} />
        <Route path="/our-works" component={Portfoliopage} />
        <Route path="/our-services" component={Servicespage} />
        <Route path='/admin/projects/add' component={AddProject}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
