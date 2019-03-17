import React, { Component } from 'react';

class BoilInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temperature: null
    };
  }

  render() {
    if (this.props.temp >= 100) {
      return <p>The water would boil.</p>;
    }

    return <p>The water would not boil.</p>;
  }
}

export default BoilInput;
