import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
      <div className='App-container'>
        <div className='App-box'>Hello I am a vending machine. What would you like to eat?</div>
        <div></div>
        <div className='App-box'>Good Bye</div>
      </div>
    </div>
  }
}

export default App;
