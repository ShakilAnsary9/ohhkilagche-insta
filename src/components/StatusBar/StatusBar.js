import { Avatar } from "@mui/material";
import React, { Component } from "react";
import "./StatusBar.css";

class StatusBar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = { StatusList: [] };

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    let data = [
      {
        username: "shakilansary9",
        imgURL: "https://picsum.photos/200",
      },
      {
        username: "shakilansa",
        imgURL: "https://picsum.photos/200",
      },
      {
        username: "shakil",
        imgURL: "https://picsum.photos/200",
      },
      {
        username: "shakilansa",
        imgURL: "https://picsum.photos/200",
      },
      {
        username: "shakil",
        imgURL: "https://picsum.photos/200",
      },
      {
        username: "shakilansa",
        imgURL: "https://picsum.photos/200",
      },
      {
        username: "shakil",
        imgURL: "https://picsum.photos/200",
      },
      {
        username: "shakilansa",
        imgURL: "https://picsum.photos/200",
      },
      {
        username: "shakil",
        imgURL: "https://picsum.photos/200",
      },
      {
        username: "shakilansa",
        imgURL: "https://picsum.photos/200",
      },
      {
        username: "shakil",
        imgURL: "https://picsum.photos/200",
      }
    ];
    this.setState({StatusList: data});
  };

  render() {
    return (
      <div>
        <div className="statusbar__container">
        {
          this.state.StatusList.map((item,index)=>(
            <div className="statusbar__profileicon">
            <div className="statusbar__iconset">
              <Avatar className="statusbar__icon" />
              <div className="statusbar__text">{item.username}</div>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    );
  }
}

export default StatusBar;
