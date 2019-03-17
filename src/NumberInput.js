import React, { Component } from 'react';
import './App.css';

class NumberInput extends Component {

  render() {

    const inputStyle = {
      width: '100%',
      fontSize: 14,
      margin: '20px 0'
    }

    return (
      <div>
        <input style={inputStyle} type={"text"} value={this.props.value} readOnly={true} />
      </div>
    );
  }
}

export default NumberInput;
