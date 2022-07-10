import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

class VendingMachine extends Component {
  render() {
    return <div className="VendingMachine">
      <div className='VendingMachine-container'>
        <div className='VendingMachine-box'>Hello I am a vending machine. What would you like to eat?</div>
        <div></div>
        <div className='VendingMachine-box'>
            <ul>
                <li><Link to={'/soda'}>Soda</Link></li>
                <li><Link to={'/chips'}>Chips</Link></li>
                <li><Link to={'/sardines'}>Sardines</Link></li>
            </ul>
        </div>
      </div>
    </div>
  }
}

export default VendingMachine;
