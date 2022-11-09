import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const { _id, title, price, img, description } = useLoaderData();
    console.log(_id);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl px-3 py-5">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: ${price}</p>

                </div>
                <figure><img className='w-full h-2/5' src={img} alt="" /></figure>
                <p>{description}</p>
            </div>

            <div>
                <h2>Review section</h2>
            </div>
        </div>
    );
};

export default ServiceDetail;