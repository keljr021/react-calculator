import React, { Component } from 'react';
import './styles/App.css';

class EnterButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.calculate();
  }

  render() {
    return (
      <div className={"calc-enterbox"}>
        <button className={"btn btn-light btn-lg w-100 my-2"} onClick={() => this.handleClick()}>=</button>
      </div>
    );
  }
}

export default EnterButton;
