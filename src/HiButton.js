import React, { Component } from 'react';

class HiButton extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    alert("Hi. *Runs away...*");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Meh!</button>
      </div>
    );
  }
}

export default HiButton;
