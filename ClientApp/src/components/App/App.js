import React from 'react';
import { Layout } from '../Layout/Layout';
import Home from '../Home/Home';
import FetchData from '../Test/FetchData';
import Counter from '../Test/Counter';
import Login from '../Login/Login';
import {
    Router,
    Route,
    Redirect,
    Switch,
  } from 'react-router-dom';
// dark mode
//import "bootswatch/dist/darkly/bootstrap.min.css";
// light mode
import "bootswatch/dist/flatly/bootstrap.min.css";

export default function App() {

    return (
        <>
        <Route exact path='/' component={Login} />
{/*         <Layout>
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
        </Layout> */}
        </>
    );
}
