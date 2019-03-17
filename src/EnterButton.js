import React, { Component } from 'react';
import './App.css';

class EnterButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.handleEnter();
  }

  render() {

    const buttonStyle = {
      width: '50%',
      cursor: 'pointer'
    }



    return (
      <div>
        <button style={buttonStyle} onClick={() => this.handleClick()}>=</button>
      </div>
    );
  }
}

export default EnterButton;
