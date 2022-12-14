import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';




const Login = () => {
   
    const {login, googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            console.log(user);
            
            navigate(from, {replace: true});
        })
        .catch(error => console.log(error));
       
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch( err => console.error(err));
    }

   

    return (
        <div className="hero w-full my-20">
            <div className="">
               
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                      
                        </div>
                        <div className="form-control mt-6">
                           <input className='btn btn-primary' type="submit" value = 'Login'></input>
                           
                           
                        </div>
                    </form>
                    <p className='text-center'>Do not have an account? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
                   <p className='text-center'>Login with <Link onClick={handleGoogleSignIn} className='text-orange-600 font-bold'>Google</Link></p>
                  
                </div>
            </div>
        </div>
    );
};

export default Login;