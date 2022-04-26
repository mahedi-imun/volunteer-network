import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='d-flex mx-auto  flex-column  justify-content-center align-items-center h-100 banner-text '>
                <h2>I grow by helping people in need.</h2>
                <InputGroup className="mt-3 w-75">
                    <FormControl
                        placeholder="search..."
                        
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-primary bg-primary text-white" 
                    type='submit'
                    id="button-addon2">
                        search
                    </Button>
                </InputGroup>

            </div>
        </div>
    );
};

export default Banner;