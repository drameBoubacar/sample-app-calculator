import React, { Component } from 'react';
import './App.css';
import Calculator from 'react-calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>React calculator</h1>
        <Calculator/>
      </div>
    );
  }
}

export default App;
