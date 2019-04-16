import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EnterButton extends Component {

  handleClick = () => {
    this.props.calculate();
  }

  render() {
    return (
      <div className={"calc-enterbox"}>
        <button className={"btn btn-light btn-lg w-100 my-2"} onClick={() => this.handleClick()}><FontAwesomeIcon icon="equals" size="xs" /></button>
      </div>
    );
  }
}

export default EnterButton;
