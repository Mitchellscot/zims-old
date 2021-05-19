import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const dispatch = useDispatch();
    const location = useLocation();
    //const loggingIn = useSelector(state => state.authentication.loggingIn); or something like that

    useEffect(() => {
        //dispatch({type: 'LOG_OUT'});
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (username && password) {
            //get return url from location state or default to home page
            //const { from } = location.state || { from: { pathname: "/" } };
            dispatch({type: 'LOGIN', payload: {
                username: inputs.username,
                password: inputs.password,
            },});
/*             else{
                //dispatch LOGIN FAILURE or something to trigger alert messages
            } */
        }
    }

    return (
        <div className="container">
        <div className="col-md-8 offset-md-2 mt-5">
        <div className="col-lg-8 offset-lg-2 border rounded">
        <div className="d-flex justify-content-center navbar-brand mt-3">
            <img src="ZIMS-logo.png" height="400px" width="363px" alt="logo"/>
            </div>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col">
                    <input placeholder="username" class="form-control" id="usernameInput" required type="text" name="username" value={username} onChange={handleChange} /></div>
                    {submitted && !username && <div className="invalid-feedback">Username is required</div>}
                    <div className="col">
                    <input placeholder="password" class="form-control" id="passwordInput" required type="text" name="password" value={password} onChange={handleChange} />
                    {submitted && !password && <div className="invalid-feedback">Password is required</div>}
                </div>
                </div>
                <div className="form-group d-flex justify-content-between mt-3">
                    <button className="btn btn-primary btn" type="submit" name="submit">
                    {/*loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>*/}
                        Login
                    </button>
                    <button 
                    onClick={(e) => alert("too bad")}
                    id="forgotPassword" type="button" class="btn btn-link btn">Forgot password?</button>
                </div>
            </form>
            </div>
            </div>
            </div>
    );
}