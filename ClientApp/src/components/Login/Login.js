import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

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
        dispatch({type: 'LOG_OUT'});
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
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" name="password" value={password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                    {/*loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>*/}
                        Login
                    </button>
                </div>
            </form>
            </div>
    );
}