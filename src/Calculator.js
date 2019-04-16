import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBackspace, faPlus, faMinus, faTimes, faDivide, faEquals, faPercent } from '@fortawesome/free-solid-svg-icons';
import MemoryButton from './MemoryButton';
import FormulaBar from './FormulaBar';
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
      memArray: [],
      disableMemoryBtn: false,
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

    if (value !== null && value.length > 0) {
      this.setState({
        value: value.substring(0, value.length - 1)
      });
    }

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

  saveMemory = () => {

    if (this.state.value !== null) {

      let array = this.state.memArray;
      array.push(this.state.value);
      
      let disableMemoryBtn = (array.length === 5) ? true : false;
      

      this.setState({
        memArray: array,
        disableMemoryBtn: disableMemoryBtn
      });

      if (this.props.clearOnMemory) {
        this.setState({
          value: null
        })
      }
    }
  }

  recallMemory = (idx) => {
    let recallNum = this.state.memArray[idx];

    this.setState({
      value: recallNum
    });
  }

  clearMemory = () => {
    this.setState({
      memArray: []
    });
  }

  render() {

    let appStyle = {
      maxWidth: this.props.maxWidth,
      borderRadius: this.props.borderRadius
    };

    let { numArray, opArray, memArray, value } = this.state;
    let formulaBar;

    if (this.props.displayFormula) {
      formulaBar = <FormulaBar numArray={numArray} opArray={opArray} value={value} />;
    }

    let memDiv;
    let memButtons;

    if (memArray.length > 0) {
      memButtons = memArray.map((num, i) =>
        <MemoryButton key={i} index={i} recallMemory={this.recallMemory} number={num} />
      );

      memDiv = <div className={"calc-mem"}>{memButtons}</div>;
    }

    return (
      <div className={"calc"} style={appStyle}>
        {memDiv}
        {formulaBar}

        <InputBox backspaceValue={this.backspaceValue} inputValue={this.inputValue} storeNumber={this.storeNumber} storeOperator={this.storeOperator} calculate={this.calculate} opArray={opArray} value={value} />

        <div>
          <CalcButtons storeNumber={this.storeNumber} storeOperator={this.storeOperator} valueToPercent={this.valueToPercent}/>
          <NumButtons inputValue={this.inputValue} saveMemory={this.saveMemory} disableMemoryBtn={this.state.disableMemoryBtn} />
          <ClearButtons backspaceValue={this.backspaceValue} resetValues={this.resetValues} clearMemory={this.clearMemory} />
        </div>


        <EnterButton storeNumber={this.storeNumber} calculate={this.calculate}/>

      </div>
    );
  }
}

export default Calculator;
