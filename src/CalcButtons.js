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
    let btnClass = "btn btn-light my-1";

    return (
      <div className={"calc-opbox w-25 position-relative float-left my-1"}>
        <div className={"btn-group-vertical"}>

          <button className={btnClass} onClick={() => this.props.backspaceValue()}>&lt;&lt;</button>

          <button className={btnClass} onClick={() => this.handleClick('add')}>+</button>
          <button className={btnClass} onClick={() => this.handleClick('sub')}>-</button>
          <button className={btnClass} onClick={() => this.handleClick('mul')}>*</button>
          <button className={btnClass} onClick={() => this.handleClick('div')}>/</button>
          <button className={btnClass} onClick={() => this.handleClick('mod')}>%</button>

          <button className={btnClass} onClick={() => this.props.resetValues()}>Reset</button>

        </div>
      </div>
    );
  }
}

export default CalcButtons;
