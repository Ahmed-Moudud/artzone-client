import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddServices = () => {
    const {user} = useContext(AuthContext);


    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            title,
            img,
            price,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('service added');
                form.reset();
            }
        })
        .catch(err => console.error(err));
    }




    return (
        <div className="hero min-h-screen bg-base-200">

        <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleAddService} className="card-body">
                    <div className="form-control">
                        <input name='title' type="text" placeholder="Service Title" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input name='img' type="text" placeholder="imageUrl" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input name='price' type="text" placeholder="price" className="input input-bordered" />
                    </div>
                    
                    <div className='form-control'>
                        <input name='email' type="email" placeholder="" defaultValue={user?.email} className="input input-bordered" readOnly />
                    </div>
                    
                    <textarea name='description' className="textarea textarea-bordered h-64" placeholder="description"></textarea>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddServices;