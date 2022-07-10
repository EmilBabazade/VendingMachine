import React, { Component } from 'react';
import './App.css';
import VendingMachine from './VendingMachine/VendingMachine';
import { Route, Routes } from 'react-router-dom';
import Chips from './Chips/Chips';
import Soda from './Soda/Soda';

class App extends Component {
  render() {
    return (
      <Routes> 
        <Route path='/' element={<VendingMachine/>} />
        <Route path='/chips' element={<Chips/>} />
        <Route path='/soda' element={<Soda/>} />
      </Routes>
    );
  }
}

export default App;
