import React, { Component } from 'react';
import '../SignUp/SignUp.css'

class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = { };
    }
    render() {
      return (
        <div>
            <input className="loginpage__text" type="text" placeholder='Email' />
            <input className="loginpage__text" type="text" placeholder='Full Name' />
            <input className="loginpage__text" type="text" placeholder='Username' />
            <input className="loginpage__text" type="password" placeholder='Password' />
            <button className="loginpage__button">Sign Up</button>
        </div>
      );
    }
  }
   
  export default SignUp;