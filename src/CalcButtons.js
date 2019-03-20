import React, { Component } from 'react';
import './styles/App.css';

class CalcButtons extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (calc) => {
      this.props.storeNumber();
      this.props.storeOperator(calc);
  }

  render() {
    return (
      <div className="calc-ops">
        <div>
          <button onClick={() => this.props.backspaceValue()}>&lt;&lt;</button>
          <button onClick={() => this.props.resetValues()}>Reset</button>
        </div>
        <div>
          <button onClick={() => this.handleClick('add')}>+</button>
          <button onClick={() => this.handleClick('sub')}>-</button>
          <button onClick={() => this.handleClick('mul')}>*</button>
          <button onClick={() => this.handleClick('div')}>/</button>
          <button onClick={() => this.handleClick('mod')}>%</button>
        </div>
      </div>
    );
  }
}

export default CalcButtons;
