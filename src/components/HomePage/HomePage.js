import React, { Component } from "react";
import "../HomePage/HomePage.css";
import MainContent from "../MainContent/MainContent";
import Navbar from "../Navbar/Navbar";

class HomePage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <div>
        <Navbar/>
        <MainContent/>
    </div>;
  }
}

export default HomePage;
