import React from 'react';
import artist from '../../assets/artist.jpg'

const Message = () => {
    return (
        <div className="hero  bg-base-200"> 
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={artist} alt='' />
          <div>
            <h1 className="text-5xl font-bold">Message From Artist</h1>
            <p className="py-6 text-white">Do you love art or painting? Yes, it definitely cant buy you any tangible asset but surely it will bring you joy and happiness. And those are the main objectives of every human being. If you like our work please feel free to contact with us. We are always here for you to serve the best service.</p>
           
          </div>
        </div>
      </div>
    );
};

export default Message;