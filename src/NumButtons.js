import React, { Component } from 'react';


class NumButtons extends Component {

  render() {

    let btnClass = "btn btn-light m-1";

    return (
      <div className={"calc-numberbox w-50 position-relative float-left my-1"}>
        <div className={"w-100"}>
          <button className={btnClass} onClick={() => this.props.inputValue(1)}>1</button>
          <button className={btnClass} onClick={() => this.props.inputValue(2)}>2</button>
          <button className={btnClass} onClick={() => this.props.inputValue(3)}>3</button>
        </div>
        <div className={"w-100"}>
          <button className={btnClass} onClick={() => this.props.inputValue(4)}>4</button>
          <button className={btnClass} onClick={() => this.props.inputValue(5)}>5</button>
          <button className={btnClass} onClick={() => this.props.inputValue(6)}>6</button>
        </div>
        <div className={"w-100"}>
          <button className={btnClass} onClick={() => this.props.inputValue(7)}>7</button>
          <button className={btnClass} onClick={() => this.props.inputValue(8)}>8</button>
          <button className={btnClass} onClick={() => this.props.inputValue(9)}>9</button>
        </div>
        <div className={"w-100"}>
          <button className={btnClass} onClick={() => this.props.inputValue('.')}>.</button>
          <button className={btnClass} onClick={() => this.props.inputValue(0)}>0</button>
          <button className={btnClass} onClick={() => this.props.saveMemory()} disabled={this.props.disableMemoryBtn}><i>M</i></button>
        </div>
      </div>
    );
  }
}

export default NumButtons;
