import React from 'react';

const SingleReview = ({review, title}) => {
    const {_id, email, message, name, serviceName} = review;
   
    return (
      <div className='grid grid-cols-3'>
      <div>{name}</div>
      <div>{serviceName}</div>
      <div>{message}</div>
      </div>
    );
};

export default SingleReview;