import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AddReview from '../Review/AddReview';
import Reviews from '../Review/Reviews';

const ServiceDetail = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, price, img, description } = useLoaderData();
    console.log(_id);
    const reviewBlock = <>
        {
            user?
            <>
              <div>
                <AddReview

                    title={title}
                    id={_id}
                ></AddReview>
            </div>
            </>
            :

            <div>
            <p>Please <Link to='/login' className='btn btn-ghost text-orange-600 font-bold px-2'>login</Link> to add review </p>
        </div>

        }
    
    </>

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
                <Reviews
                    title={title}
                ></Reviews>
            </div>

          <div>
            {reviewBlock}
          </div>

        </div>
    );
};

export default ServiceDetail;