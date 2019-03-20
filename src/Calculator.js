import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBackspace, faPlus, faMinus, faTimes, faDivide, faEquals } from '@fortawesome/free-solid-svg-icons';
import NumberInput from './NumberInput';
import CalcButtons from './CalcButtons';
import NumButtons from './NumButtons';
import ClearButtons from './ClearButtons';
import EnterButton from './EnterButton';
import './styles/default.css';

library.add(faBackspace, faPlus, faMinus, faTimes, faDivide, faEquals);

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      numIndex: 0,
      numArray: [],
      opArray: []
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

  calculate = () => {

    let { numArray, opArray, value } = this.state;
    let a, b;

    //Add last value in first
    numArray.push(value);

    for(let i = 0; i < numArray.length; i++) {

      let num = numArray[i];

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

    return (
      <div className={"calc"} style={appStyle}>
        <NumberInput backspaceValue={this.backspaceValue} inputValue={this.inputValue} storeNumber={this.storeNumber} storeOperator={this.storeOperator} calculate={this.calculate} value={this.state.value} />

        <div>
          <CalcButtons storeNumber={this.storeNumber} storeOperator={this.storeOperator}/>
          <NumButtons inputValue={this.inputValue} />
          <ClearButtons backspaceValue={this.backspaceValue} resetValues={this.resetValues}/>
        </div>


        <EnterButton storeNumber={this.storeNumber} calculate={this.calculate}/>

      </div>
    );
  }
}

export default Calculator;