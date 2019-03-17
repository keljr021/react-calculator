import React, { Component } from 'react';
import Greeting from './Greeting';

class LoginControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loggedIn: true
    });
  }

  handleLogout(e) {
    e.preventDefault();

    this.setState({
      loggedIn: false
    });
  }

  render() {

    let isLoggedIn = this.state.loggedIn;
    let button;

    if (isLoggedIn) {
      button = <button onClick={this.handleLogout}>Logout User</button>
    }
    else {
      button = <button onClick={this.handleLogin}>Login User</button>
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
