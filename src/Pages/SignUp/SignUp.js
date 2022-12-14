import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {  
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            console.log(user);
        })
        .catch(err => console.error(err))

    }


    return (
        <div className="hero w-full my-20">
        <div className="">
           
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
           
                <form onSubmit={handleSignUp}  className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                      
                    </div>
                    <div className="form-control mt-6">
                       <input className='btn btn-primary' type="submit" value = 'Sign UP'></input>
                    </div>
                </form>
                <p className='text-center my-3'>Already Have an Account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
             
            </div>
        </div>
    </div>
    );
};

export default SignUp;