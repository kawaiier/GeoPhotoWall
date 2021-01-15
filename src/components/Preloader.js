import React from 'react';
import preLoad from '../assets/loading2.svg'

const Preloader = (props) => {
    return (
        <img src={preLoad} className='Preloader' alt='Preloader is loading'/>
    );
};

export default Preloader;