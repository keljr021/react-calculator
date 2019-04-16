import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ClearButtons extends Component {

  render() {
    let btnClass = "btn btn-light my-1";

    return (
      <div className={"calc-clearbox w-25 position-relative float-left my-1"}>
        <div className={"btn-group-vertical"}>
          <button className={btnClass} onClick={() => this.props.backspaceValue()}><FontAwesomeIcon icon="backspace" size="xs"/></button>
          <button className={btnClass} onClick={() => this.props.resetValues()}>C</button>
          <button className={btnClass} onClick={() => this.props.clearMemory()}><i>MC</i></button>
        </div>
      </div>
    );
  }
}

export default ClearButtons;
