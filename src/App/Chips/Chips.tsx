import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chips.css';
import { ChipsState } from './ChipsState';

export default class Chips extends Component<any, ChipsState> {
    constructor(props: any) {
        super(props);
        this.state = { chipsEaten: 0 };
    }

    eat = () => {
        this.setState({chipsEaten: this.state.chipsEaten + 1});
    }

    render() {
        const {chipsEaten} = this.state;
        return <div className='Chips'>
            <div className='VendingMachine-box'>
                <div>BAGS EATEN: {chipsEaten}</div>
                <button className='Chips-button' onClick={this.eat}>NOM NOM NOM</button>
                <li><Link to={'/'}>GO BACK</Link></li>
            </div>
        </div>
    }
}