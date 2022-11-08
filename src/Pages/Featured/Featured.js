import React from 'react';
import bbc from '../../assets/bbc.png';
import bloomberg from '../../assets/bloomberg.png';
import fastcompany from '../../assets/fast-company.png';
import sundaytimes from '../../assets/sunday-times.png';
import cnn from '../../assets/cnn.png';
import './Featured.css'

const Featured = () => {
    return (
        <div className='my-10 '>
            <h2 className='text-center text-orange-600 text-4xl font-bold'>We have been Featured</h2>
            <div className='grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-5 justify-items-center'>
                <div className='featured-image'><img src={bbc} /></div>
                <div className='featured-image'><img src={fastcompany} /></div>
                <div className='featured-image'><img src={bloomberg} /></div>
                <div className='featured-image'><img src={cnn} /></div>
                <div className='featured-image'><img src={sundaytimes} /></div>
            </div>
        </div>
    );
};

export default Featured;