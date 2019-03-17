import React, { Component } from 'react';

class ToggleButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      toggle: !this.state.toggle
    });

  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Toggle Button - {this.state.toggle ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}

export default ToggleButton;
