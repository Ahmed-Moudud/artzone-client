import React from 'react';
import artist from '../../assets/artist.jpg'

const Message = () => {
    return (
        <div className="hero  bg-base-200"> 
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={artist} alt='' />
          <div>
            <h1 className="text-5xl font-bold">Message From Artist</h1>
            <p className="py-6 text-white">Do you love art or painting? Yes it definitely cant buy you any tangible assets but surely it will give you joy and happiness? To those the main objective of every human beign. It you like our work please feel free to contact with us. We are always here for you to serce the best service.</p>
           
          </div>
        </div>
      </div>
    );
};

export default Message;