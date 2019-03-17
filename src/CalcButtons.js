import React, { Component } from 'react';
import './styles/App.css';

class CalcButtons extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (calc) => {
      this.props.storeOperator(calc);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick('add')}>+</button>
        <button onClick={() => this.handleClick('sub')}>-</button>
        <button onClick={() => this.handleClick('mul')}>*</button>
        <button onClick={() => this.handleClick('div')}>/</button>
        <button onClick={() => this.handleClick('mod')}>%</button>
      </div>
    );
  }
}

export default CalcButtons;
