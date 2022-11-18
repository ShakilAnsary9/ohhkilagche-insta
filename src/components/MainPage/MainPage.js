import React, { Component } from "react";
import Post from "../Post/Post";
import "./MainPage.css";

class MainPage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Post />
        <Post />
      </div>
    );
  }
}

export default MainPage;
