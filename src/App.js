import React, { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Calculator maxWidth={400}
                    borderRadius={10}
                    displayFormula={true} />
      </div>
    );
  }
}

export default App;
