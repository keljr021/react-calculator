import React, { Component } from 'react';

class TempInput extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(e) {
    e.preventDefault();
    this.props.onTemperatureChange();
  }

  render() {
    const scaleNames = {
      c: 'Celcius',
      f: 'Fahrenheit'
    };

    const temp = this.props.temp;
    const scale = this.props.scale;

    return (
      <div>
        <p>Enter a temperature in {scaleNames[scale]}: </p>
        <input value={temp} onChange={this.handleChange} />
      </div>
    );
  }
}

export default TempInput;
