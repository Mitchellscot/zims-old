import React, { useState } from 'react';
import Login from '../Login/Login';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
    const [name, setName] = useState('');
    const user = useSelector(state => state.login.user)

/*     useEffect(() => {
    }, []); */
    return (
        <>
            {user.loggedIn ?  <h1 className="text-center">login to see magic</h1> : <h1 className="text-center">Hello {user.role}</h1>}
            <Login />
            </>
    );
}
