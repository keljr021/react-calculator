import React, { Component } from 'react';
import './styles/App.css';

class NumButtons extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.props.inputValue(1)}>1</button>
          <button onClick={() => this.props.inputValue(2)}>2</button>
          <button onClick={() => this.props.inputValue(3)}>3</button>
        </div>
        <div>
          <button onClick={() => this.props.inputValue(4)}>4</button>
          <button onClick={() => this.props.inputValue(5)}>5</button>
          <button onClick={() => this.props.inputValue(6)}>6</button>
        </div>
        <div>
          <button onClick={() => this.props.inputValue(7)}>7</button>
          <button onClick={() => this.props.inputValue(8)}>8</button>
          <button onClick={() => this.props.inputValue(9)}>9</button>
        </div>
        <div>
          <button onClick={() => this.props.inputValue('.')}>.</button>
          <button onClick={() => this.props.inputValue(0)}>0</button>
          
        </div>
      </div>
    );
  }
}

export default NumButtons;
