import React from 'react';
import preLoad from '../assets/loading.svg'

const Preloader = (props) => {
    return (
        <img src={preLoad} className='Preloader' alt='Preloader is loading'/>
    );
};

export default Preloader;