import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CalcButtons extends Component {

  handleClick = (calc) => {
      this.props.storeNumber();
      this.props.storeOperator(calc);
  }

  render() {
    let btnClass = "btn btn-light my-1";

    return (
      <div className={"calc-opbox w-25 position-relative float-left my-1"}>
        <div className={"btn-group-vertical"}>
          <button className={btnClass} onClick={() => this.handleClick('add')}><FontAwesomeIcon icon="plus" size="xs" /></button>
          <button className={btnClass} onClick={() => this.handleClick('sub')}><FontAwesomeIcon icon="minus" size="xs" /></button>
          <button className={btnClass} onClick={() => this.handleClick('mul')}><FontAwesomeIcon icon="times" size="xs" /></button>
          <button className={btnClass} onClick={() => this.handleClick('div')}><FontAwesomeIcon icon="divide" size="xs" /></button>
          <button className={btnClass} onClick={() => this.handleClick('mod')}>mod</button>
          <button className={btnClass} onClick={() => this.props.valueToPercent()}><FontAwesomeIcon icon="percent" size="xs" /></button>
        </div>
      </div>
    );
  }
}

export default CalcButtons;
