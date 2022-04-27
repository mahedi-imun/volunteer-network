import React from 'react';
import './HelpCard.css'

const HelpCard = ({ help }) => {
    const { img, name } = help;
    const backgroundColor = [
        '#FF7044',
        '#3F90FC',
        '#FFBD3E',
        '#421FCF'
    ]
    const color = backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
    return (
        <div className='card-body col-md-3 ' >
            <img src={img} alt="" />
            <h5 style={{ background: color }} className='card-name'>{name}</h5>
        </div>
    );
};

export default HelpCard;