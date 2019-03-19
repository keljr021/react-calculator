import React, { Component } from 'react';
import NumberInput from './NumberInput';
import CalcButtons from './CalcButtons';
import NumButtons from './NumButtons';
import EnterButton from './EnterButton';
import './styles/App.css';

class App extends Component {

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

    numArray.push(value);

    this.setState({
      numArray: numArray
    });
  }

  calculate = () => {

    let { numArray, opArray, value } = this.state;

    //Add last value in first
    numArray.push(value);

    let a, b;

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
            case "add":
              a = (a + b);
              break;
            case "sub":
              a = (a - b);
              break;
            case "mul":
              a = (a * b);
              break;
            case "div":
              a = (a / b);
              break;
            case "mod":
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

    return (
      <div className="App">
        <NumberInput value={this.state.value} />

        <div className={"center-padding"}>
          <CalcButtons storeNumber={this.storeNumber} storeOperator={this.storeOperator}/>
          <NumButtons inputValue={this.inputValue} resetValues={this.resetValues}/>
          <EnterButton storeNumber={this.storeNumber} calculate={this.calculate}/>
          
        </div>

      </div>
    );
  }
}

export default App;
