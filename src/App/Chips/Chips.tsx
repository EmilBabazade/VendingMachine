import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chip from '../Chip/Chip';
import './Chips.css';
import { ChipsState } from './ChipsState';

export default class Chips extends Component<any, ChipsState> {
    constructor(props: any) {
        super(props);
        this.state = { 
            chipsEaten: 0,
            chips: []
        };
    }

    eat = () => {
        const top = Math.floor(Math.random() * 700);
        const left = Math.floor(Math.random() * 1300);
        this.setState({
            chipsEaten: this.state.chipsEaten + 1,
            chips: [
                ...this.state.chips, 
                { left, top }
            ]
        });
    }

    render() {
        const {chipsEaten} = this.state;
        return <div className='Chips'>
            <div className='VendingMachine-box'>
                {this.state.chips.map((c, i) => <Chip key={i} left={c.left} top={c.top} />)}
                <div>BAGS EATEN: {chipsEaten}</div>
                <button className='Chips-button' onClick={this.eat}>NOM NOM NOM</button>
                <li><Link to={'/'}>GO BACK</Link></li>
            </div>
        </div>
    }
}