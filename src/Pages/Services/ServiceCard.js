import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'


const ServiceCard = ({service}) => {
    const {_id, description, img, price, title} = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img className='service-image' src={img} alt="Shoes" /></figure>
        

        <div className="card-body text-start">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className='text-2xl  text-orange-600 font-semibold'>Price: $ {price}</p>
            <p className='text-start'>
                {
                description.length > 100?
                <>{description.slice( 0, 250) + '...'}
                <Link>Read More</Link>
                </>
                :
                <span>{description}</span>
                
                }
             </p>
            <div className="card-actions justify-start">
               <Link to={`/allservices/${_id}`}>
               <button className="btn btn-primary">View Detail</button>
               </Link>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;