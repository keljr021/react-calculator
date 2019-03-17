import React, { Component } from 'react';
import TempInput from './TempInput';
import BoilInput from './BoilInput';

class Temperature extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temp: 100,
      scale: 'f'
    };

    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.tryConvert = this.tryConvert.bind(this);
    this.convert = this.convert.bind(this);
  }

  handleCelciusChange(temp) {
    this.setState({
      scale: 'c',
      temp
    });
  }

  handleFahrenheitChange(temp) {
    this.setState({
      scale: 'f',
      temp
    });
  }

  tryConvert(temp, convertTo) {
    const input = parseFloat(temp);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = this.convert(temp, convertTo);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  convert(temp, convertTo) {

    if (convertTo == 'f') {
      return (temp - 32) * 5 / 9;
    }

    if (convertTo == 'c') {
      return (temp * 9 / 5) + 32;
    }
  }

  render() {

    let temp = this.state.temp;
    let scale = this.state.scale;

    let celsius = scale === 'f' ? this.tryConvert(temp, 'c') : temp;
    let fahrenheit = scale === 'c' ? this.tryConvert(temp, 'f') : temp;

    return (
      <div>
        <TempInput temp={celsius}
                   scale={"c"}
                   onTemperatureChange={this.handleCelciusChange} />

        <TempInput temp={fahrenheit}
                   scale={"f"}
                   onTemperatureChange={this.handleFahrenheitChange} />

        <BoilInput temp={parseFloat(celsius)} />

      </div>
    );
  }
}

export default Temperature;
