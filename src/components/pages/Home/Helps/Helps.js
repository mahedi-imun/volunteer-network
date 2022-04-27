import React, { useEffect, useState } from 'react';
import HelpCard from './HelpCard';
import './Helps.css'
const Helps = () => {
    const [helps, setHelps] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/help')
            .then(res => res.json())
            .then(data => setHelps(data))


    }, [])
    return (
        <div className='helps-container '>
            <div className='d-flex flex-wrap justify-content-between card-container'>
                {
                    helps.map(help => <HelpCard
                        key={help._id}
                        help={help}
                    >
                    </HelpCard>)
                }
            </div>


        </div>
    );
};

export default Helps;