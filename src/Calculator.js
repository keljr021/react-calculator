import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBackspace, faPlus, faMinus, faTimes, faDivide, faEquals, faPercent } from '@fortawesome/free-solid-svg-icons';
import InputBox from './InputBox';
import CalcButtons from './CalcButtons';
import NumButtons from './NumButtons';
import ClearButtons from './ClearButtons';
import EnterButton from './EnterButton';
import './styles/default.css';

library.add(faBackspace, faPlus, faMinus, faTimes, faDivide, faEquals, faPercent);

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      numArray: [],
      opArray: [],
      formulaString: ""
    };
  }

  resetValues = () => {
    this.setState({
      value: null,
      numArray: [],
      opArray: []
    });
  }

  backspaceValue = () => {

    let { value } = this.state;

    this.setState({
      value: value.substring(0, value.length - 1)
    });
  }

  inputValue = (input) => {

    let newValue = input;

    if (this.state.value !== null) {
      newValue = this.state.value + "" + input;
    }

    this.setState({
      value: newValue
    });

  }

  storeOperator = (input) => {

    let { opArray } = this.state;

    opArray.push(input);

    this.setState({
      opArray: opArray,
      value: null
    });

  }

  storeNumber = () => {
    let { numArray, value } = this.state;

    numArray.push(parseFloat(value));

    this.setState({
      numArray: numArray
    });
  }

  valueToPercent = () => {

    let input = this.state.value;

    if(isNaN(input))
      return false;

    let inputToPercent = parseFloat(input) / 100;

    this.setState({
      value: inputToPercent
    });

  }

  calculate = () => {

    let { numArray, opArray, value } = this.state;
    let a, b;

    //Add last value in first
    numArray.push(value);

    for(let i = 0; i < numArray.length; i++) {

      let num = numArray[i];

      if (num === null) {
        break;
      }

      if (a == null) {
        a = parseFloat(num);
        continue;
      }

      if (b == null) {
        b = parseFloat(num);
      }

      if (a !== null && b !== null) {

        if (opArray.length > 0) {

          let operator = opArray.shift();

          switch (operator) {
            case "add": case "+":
              a = (a + b);
              break;
            case "sub": case "-":
              a = (a - b);
              break;
            case "mul": case "*":
              a = (a * b);
              break;
            case "div": case "/":
              a = (a / b);
              break;
            case "mod": case "%":
              a = (a % b);
              break;
            default:
              break;
          }

          b = null;

        }

      }

    }

    this.setState({
      value: a,
      numArray: [],
      opArray: []
    });

  }

  render() {

    let appStyle = {
      maxWidth: this.props.maxWidth,
      borderRadius: this.props.borderRadius
    };

    let formulaStyle = {
      textAlign: 'left'
    };

    let { numArray, opArray, value } = this.state;
    let formulaDiv;

    if (this.props.displayFormula) {
      let formulaString = numArray.map((num, i) =>
        num + " " + (typeof opArray[i] !== 'undefined' ? opArray[i] : " ")
      ) + " " + (value === null ? " " : value);

      formulaDiv = <div style={formulaStyle}>{formulaString}</div>
    }

    return (
      <div className={"calc"} style={appStyle}>
        {formulaDiv}
        <InputBox backspaceValue={this.backspaceValue} inputValue={this.inputValue} storeNumber={this.storeNumber} storeOperator={this.storeOperator} calculate={this.calculate} opArray={opArray} value={value} />

        <div>
          <CalcButtons storeNumber={this.storeNumber} storeOperator={this.storeOperator} valueToPercent={this.valueToPercent}/>
          <NumButtons inputValue={this.inputValue} />
          <ClearButtons backspaceValue={this.backspaceValue} resetValues={this.resetValues}/>
        </div>


        <EnterButton storeNumber={this.storeNumber} calculate={this.calculate}/>

      </div>
    );
  }
}

export default Calculator;
