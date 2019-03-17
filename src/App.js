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
      value: 0,
      a: null,
      b: null,
      operator: null,
      
    };
  }

  resetValues = () => {
    this.setState({
      value: 0,
      a: null,
      b: null,
      operator: null,
    });
  }

  inputValue = (input) => {
    
    let currentValue = this.state.value;
    
    this.setState({
      value: currentValue + "" + this.state.value
    });
  }

  storeOperator = (input) => {

    if (this.state.calc !== null && this.state.a !== null && this.state.b !== null) {
      this.calculate();
    }

    this.setState({
      calc: input
    });
  }

  storeNumber = (input) => {
    if (this.state.a === null) {
      this.setState({
        a: input,
        value: input
      });
    }
    else {

      if (this.state.calc !== null) {
        this.setState({
          b: input,
          value: input
        });
      }

    }
  }

  calculate = () => {
    let output = 0;

    let a = this.state.a;
    let b = this.state.b;
    let calc = this.state.calc;

    if (a !== null && b !== null) {

        switch(calc) {
          case "add":
            output = (a + b);
            break;
          case "sub":
            output = (a - b);
            break;
          case "mul":
            output = (a * b);
            break;
          case "div":
            output = (a / b);
            break;
          case "mod":
            output = (a % b);
            break;
          default:
            break;
        }

        this.setState({
          value: output
        });

    }
    else {

      this.setState({
        value: a
      });

    }
  }

  render() {
    return (
      <div className="App">
        <NumberInput value={this.state.value} />

        <div className={"center-padding"}>
          <CalcButtons storeOperator={this.storeOperator}/>
          <NumButtons inputNumber={this.inputNumber} resetValues={this.resetValues}/>
          <EnterButton handleEnter={this.calculate}/>
        </div>

      </div>
    );
  }
}

export default App;
