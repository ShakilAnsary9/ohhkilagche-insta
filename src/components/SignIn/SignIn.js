import React, { Component } from 'react';
import '../SignIn/SignIn.css'

class SignIn extends Component {
    constructor(props) {
      super(props);
      this.state = { };
    }
    render() {
      return (
        <div>
            <input className="loginpage__text" type="text" placeholder='Email' />
            <input className="loginpage__text" type="password" placeholder='Password' />
            <button className="loginpage__button">Log In</button>
        </div>
      );
    }
  }
   
  export default SignIn;