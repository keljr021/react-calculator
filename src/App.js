import React, { Component } from 'react';
import Time from './Time';
import Welcome from './Welcome';
import HiButton from './HiButton';
import ToggleButton from './ToggleButton';
import LoginControl from './LoginControl';
import Temperature from './Temperature';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <p>Hello World!</p>
        <Welcome name={"Kelvin"} />
        <Time />
        <HiButton />
        <ToggleButton />
        <LoginControl />

        <hr />
        <br />
        <Temperature />

      </div>
    );
  }
}

export default App;
