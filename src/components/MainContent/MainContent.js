import React, { Component } from "react";
import { Grid } from "@mui/material";
import StatusBar from "../StatusBar/StatusBar";
import MainPage from "../MainPage/MainPage";

class MainContent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={2}>
            ohh
          </Grid>
          <Grid item xs={6}>
            <div>
              <StatusBar/>
              <MainPage/>
            </div>
          </Grid>
          <Grid item xs={2}>
            lagche
          </Grid>
          <Grid item xs={2}>
            go
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MainContent;
