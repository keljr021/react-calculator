import React, { Component } from 'react';

class Greeting extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.isLoggedIn) {
      return (
        <div>
            <p>Welcome User, you have logged in.</p>
        </div>
      );
    }
    else {
      return (
        <div>
            <p>Not logged in yet.</p>
        </div>
      );
    }
  }
}

export default Greeting;
