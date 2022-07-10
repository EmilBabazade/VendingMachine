import React, { Component } from 'react';
import './App.css';
import VendingMachine from './VendingMachine/VendingMachine';
import { Route, Routes } from 'react-router-dom';
import Chips from './Chips/Chips';
import Soda from './Soda/Soda';
import Sardines from './Sardines/Sardines';

class App extends Component {
  render() {
    return (
      <Routes> 
        <Route path='/' element={<VendingMachine/>} />
        <Route path='/chips' element={<Chips/>} />
        <Route path='/soda' element={<Soda/>} />
        <Route path='/sardines' element={<Sardines/>} />
      </Routes>
    );
  }
}

export default App;
