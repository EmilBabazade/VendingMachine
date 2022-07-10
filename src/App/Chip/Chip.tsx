import React, { Component } from 'react';
import ChipImage from '../../assets/images/Chips.png';
import './Chip.css';
import { ChipProps } from './ChipProps';

export default class Chip extends Component<ChipProps> {
    static defaultProps: ChipProps = {
        left: 0,
        top: 0
    }

    render(): React.ReactNode {
        const {left, top} = this.props;
        const positionStyle = {
            left: `${left}px`,
            top: `${top}px`
        }
        return (
            <div>
                <img style={positionStyle} className='Chip-img' src={ChipImage}/>
            </div>
        );
    }
}