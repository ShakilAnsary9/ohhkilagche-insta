import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import insta_image from "../../images/9364675fb26a.svg";
import Logo from "../../images/logo-ohhkilagche.png";
import "./LoginPage.css";
import fb from "../../images/fb.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  changeLogin = () => {
    if (this.state.isLogin) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  };

  render() {
    const authButton = this.state.isLogin ? <SignIn /> : <SignUp />;
    const signupOpt = this.state.isLogin ? (
      <div className="login__signup">
        Don't have an account?{" "}
        <span onClick={this.changeLogin} className="signup__txt">
          Sign up
        </span>
      </div>
    ) : (
      <div className="login__signin">
        Have an account?{" "}
        <span onClick={this.changeLogin} className="signup__txt">
          Log In
        </span>
      </div>
    );

    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage__main">
              <div>
                <img src={insta_image} alt="insta_image" width="454px" />
              </div>
              <div>
                <div className="loginpage__right">
                  <img className="loginpage__logo" src={Logo} alt="" />
                  <div>
                    <div className="loginpage__signin">
                      {authButton}
                      <div className="login__ordiv">
                        <div className="login__divider"></div>
                        <div className="login__or">OR</div>
                        <div className="login__divider"></div>
                      </div>
                      <div className="login__fb">
                        <img
                          src={fb}
                          alt=""
                          width="15px"
                          style={{ marginRight: "8px", marginBottom: "-3px" }}
                        />
                        Login with Facebook
                      </div>
                      <div className="login__forgot">Forgot Password?</div>
                    </div>
                  </div>
                </div>
                <div className="login_signupopt">{signupOpt}</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
