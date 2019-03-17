import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {

    this.timerId = setInterval(
      () => this.tick(),
      1000
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {

    let date = this.state.date;
    let time = date.toLocaleTimeString();

    return (
      <div className="time">
        <p>It is now { time }</p>
      </div>
    );
  }
}

export default Time;
