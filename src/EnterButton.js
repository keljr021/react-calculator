import React, { Component } from 'react';
import './styles/App.css';

class EnterButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.calculate();
  }

  render() {

    const buttonStyle = {
      width: 'calc(100% - 40px)',
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
