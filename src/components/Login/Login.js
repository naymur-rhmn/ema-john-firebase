import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    // redirect to the initaial page after login
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    //

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="email" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                    <p>new to ema-john: <Link to="/register">Create Account</Link></p>
                    <p>--------or--------</p>
                    <button
                        className="btn-regular"
                        onClick={handleGoogleLogin}
                    >Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;