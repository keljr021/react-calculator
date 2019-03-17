import React, { Component } from 'react';
import NumberInput from './NumberInput';
import CalcButtons from './CalcButtons';
import NumButtons from './NumButtons';
import EnterButton from './EnterButton';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: null,
      b: null,
      calc: null,
      value: 0
    };
  }

  resetValues = () => {
    this.setState({
      a: null,
      b: null,
      calc: null,
      value: 0
    });
  }

  storeCalc = (calc) => {

    if (this.state.calc !== null && this.state.a !== null && this.state.b !== null) {
      this.calculate();
    }

    this.setState({
      calc: calc
    });
  }

  storeNum = (num) => {
    if (this.state.a === null) {
      this.setState({
        a: num,
        value: num
      });
    }
    else {
      this.setState({
        b: num,
        value: num
      });

      this.calculate();
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
          <CalcButtons storeCalc={this.storeCalc}/>
          <NumButtons storeNum={this.storeNum} resetValues={this.resetValues}/>
          <EnterButton handleEnter={this.calculate}/>
        </div>

      </div>
    );
  }
}

export default App;
