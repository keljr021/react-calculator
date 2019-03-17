import React, { Component } from 'react';
import './App.css';

class NumButtons extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = (num) => {
    this.props.storeNum(num);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.handleClick(1)}>1</button>
          <button onClick={() => this.handleClick(2)}>2</button>
          <button onClick={() => this.handleClick(3)}>3</button>
        </div>
        <div>
          <button onClick={() => this.handleClick(4)}>4</button>
          <button onClick={() => this.handleClick(5)}>5</button>
          <button onClick={() => this.handleClick(6)}>6</button>
        </div>
        <div>
          <button onClick={() => this.handleClick(7)}>7</button>
          <button onClick={() => this.handleClick(8)}>8</button>
          <button onClick={() => this.handleClick(9)}>9</button>
        </div>
        <div>
          <button onClick={() => this.handleClick(0)}>0</button>
          <button onClick={() => this.props.resetValues()}>Clear</button>
        </div>
      </div>
    );
  }
}

export default NumButtons;
