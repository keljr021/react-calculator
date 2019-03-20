import React, { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Calculator maxWidth={500}
                    borderRadius={10} />
      </div>
    );
  }
}

export default App;
