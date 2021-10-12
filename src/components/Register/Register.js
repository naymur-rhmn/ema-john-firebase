import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="email" id="" placeholder="Choose Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Choose Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <p>---------or----------</p>
                    <button className="btn-regular">Google Sign IN</button>
                </form>
            </div>
        </div>
    );
};

export default Register;