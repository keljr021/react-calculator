import React, { Component } from 'react';
import './styles/App.css';

class NumberInput extends Component {

  handleKeyDown = (e) => {
    e.preventDefault();

    let input = e.key;

    if (input == "Enter") {
      this.props.calculate();
    }

    else if (input == "Backspace") {
      this.props.backspaceValue();
    }

    else {

      let isOp = (/\+|\-|\*|\//g).test(input);
      let isNum = (/[0-9]/g).test(input);
      let isDec = (input == '.');

      if (isOp) {
        this.props.storeNumber();
        this.props.storeOperator(input);
      }
      else {
        if (isNum || isDec)
          this.props.inputValue(input);
      }
    }
  }

  render() {

    return (
      <div>
        <input className={"form-control form-control-lg my-2 calc-input"} type={"text"} onKeyDown={this.handleKeyDown} autoFocus={true} defaultValue={(this.props.value == null) ? "" : this.props.value} />
      </div>
    );
  }
}

export default NumberInput;
