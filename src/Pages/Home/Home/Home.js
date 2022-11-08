import React from 'react';
import './Home.css';
import banner from '../../../assets/banner-painter.jpg'
import Services from '../../Services/Services';
import Featured from '../../Featured/Featured';
import { Link } from 'react-router-dom';
import Message from '../../Message/Message';

const Home = () => {
    return (
        <div>            
            <img className='banner-img' src={banner} alt=''></img>
            <div>
            <Services></Services>
            <div className='text-center'>
                <Link>
                <button className='btn btn-primary font-bold w-3/5'>See All</button>
                </Link>
            </div>
            <hr className='my-5'></hr>
            </div>
            
            <Message></Message>
            <hr></hr>
            <Featured></Featured>
        </div>
    );
};

export default Home;