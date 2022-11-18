import React, { Component } from "react";
import "./Navbar.css";
import { Grid } from "@mui/material";
import Logo from "../../images/logo-ohhkilagche.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import heart from "../../images/love.svg";
import { Avatar } from "@mui/material";

class Navbar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div className="navbar__barContent">
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <img className="navbar__logo" src={Logo} alt="" />
            </Grid>
            <Grid item xs={3}>
              <input className="navbar__search" type="text" placeholder="Search" />
            </Grid>
            <Grid className="navbar__icon" item xs={3}>
              <img src={home} alt="" />
              <img src={message} alt="" />
              <img src={find} alt="" />
              <img src={heart} alt="" />
              <Avatar className="navbar__avtar"/>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Navbar;
