import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddReview = ({ title, _id }) => {
    const { user } = useContext(AuthContext);

    const submitReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            name,
            email,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review added');
                form.reset();
            }
        })
        .catch(err => console.error(err));
    }


    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={submitReview} className="card-body">
                        <div className="form-control">
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <input name='reviewfor' defaultValue={title} type="text" placeholder="" className="input input-bordered" readOnly />
                        </div>
                        
                        <div className='form-control'>
                            <input name='email' type="email" placeholder="" defaultValue={user?.email} className="input input-bordered" readOnly />
                        </div>
                        <textarea name='message' className="textarea textarea-bordered h-64" placeholder="Add review"></textarea>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;