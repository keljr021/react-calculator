import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          <button className={btnClass} onClick={() => this.handleClick('+')}><FontAwesomeIcon icon="plus" size="xs" /></button>
          <button className={btnClass} onClick={() => this.handleClick('-')}><FontAwesomeIcon icon="minus" size="xs" /></button>
          <button className={btnClass} onClick={() => this.handleClick('*')}><FontAwesomeIcon icon="times" size="xs" /></button>
          <button className={btnClass} onClick={() => this.handleClick('/')}><FontAwesomeIcon icon="divide" size="xs" /></button>
          <button className={btnClass} onClick={() => this.handleClick('%')}>mod</button>
        </div>
      </div>
    );
  }
}

export default CalcButtons;
