import React, { Component } from 'react';
import './VendingMachine.css';

class VendingMachine extends Component {
  render() {
    return <div className="VendingMachine">
      <div className='VendingMachine-container'>
        <div className='VendingMachine-box'>Hello I am a vending machine. What would you like to eat?</div>
        <div></div>
        <div className='VendingMachine-box'>
            <ul>
                <li><a href='#'>Soda</a></li>
                <li><a href='#'>Chips</a></li>
                <li><a href='#'>Sardines</a></li>
            </ul>
        </div>
      </div>
    </div>
  }
}

export default VendingMachine;
