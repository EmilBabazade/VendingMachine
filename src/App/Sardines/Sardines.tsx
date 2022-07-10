import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sardines.css';


export default class Sardines extends Component {
    render() {
        return (
            <div className='Sardines'>
                <div className='VendingMachine-box' style={{width: '700px'}}>
                    <div>You don't eat the sardines. The sardines, they eat you!!</div>
                    <Link to={'/'}>GO BACK</Link>
                </div>
            </div>
        );
    }
}