import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SodaImg from '../../assets/images/Soda.png';
import './Soda.css';

export default class Soda extends Component {
    render() {
        return <div className='Soda'>
            <img src={SodaImg} className='Soda-spinning' />
            <div className='VendingMachine-box'>
                <div>Omg Sugarrr</div>
                <Link to={'/'}>GO BACK</Link>
            </div>
            <img src={SodaImg} className='Soda-spinning' />
        </div>
    }
}