import React from 'react';
import { Route } from 'react-router';
import { Layout } from '../Layout/Layout';
import Home from '../Home/Home';
import FetchData from '../Test/FetchData';
import Counter from '../Test/Counter';
// dark mode
//import "bootswatch/dist/darkly/bootstrap.min.css";
// light mode
// import "bootswatch/dist/flatly/bootstrap.min.css";

export default function App() {

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
        </Layout>
    );
}
