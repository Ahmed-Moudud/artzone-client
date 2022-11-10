import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = ({title}) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://assignment-eleven-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data) )
    })
    
    return (
        <div className='my-10'>
            <hr className='my-10'></hr>
            <h1 className='text-center text-3xl font-bold'>All Reviews</h1>
            <div className='grid grid-cols-3 text-2xl font-bold'>
                <div><h2>Name</h2></div>
                <div><h2>Servie Name</h2></div>
                <div><h2>Review</h2></div>
            </div>
            {
                reviews.map(review => <SingleReview
                key={review._id}
                review = {review}
                title= {title}
                ></SingleReview>)
            }
        </div>
    );
};

export default Reviews;