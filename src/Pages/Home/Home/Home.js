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
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='rounded' src={banner} alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Do You Like Painting?</h1>
                        <p className="py-6">We have different types of painting services. Here you can discover a large number of art services. If you like to experience any of them please let us know.</p>

                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center text-5xl font-semibold my-10'>Our Services</h2>
            </div>
            <div>
                <Services></Services>
                <div className='text-center'>
                    <Link to='/allservices'>
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