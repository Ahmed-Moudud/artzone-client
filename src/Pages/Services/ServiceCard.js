import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const {_id, img, price, title} = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img className='service-image' src={img} alt="Shoes" /></figure>
        <div className="card-body text-center">
            <h2 className="text-center text-2xl font-bold">{title}</h2>
            <p className='text-2xl  text-orange-600 font-semibold'>Price: $ {price}</p>
            <div className="card-actions justify-center">
               <Link to='/'>
               <button className="btn btn-primary">View Detail</button>
               </Link>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;