import React, { useEffect, useState } from 'react';

import ServiceCard from './ServiceCard';

const AllServices = () => {
    
    const [allservices, setAllservices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setAllservices(data))
    }, [])

  

    return (

        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3'>
            {
                allservices.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>

    );
};

export default AllServices;