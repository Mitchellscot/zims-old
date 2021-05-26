import React from 'react';
import { Layout } from '../Layout/Layout';
import Home from '../Home/Home';
import FetchData from '../Test/FetchData';
import Counter from '../Test/Counter';
import Login from '../Login/Login';
import { createBrowserHistory } from 'history';
import {
    Router,
    Route,
    Redirect,
    Switch,
  } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Admin from '/Admin/Admin';
// dark mode
//import "bootswatch/dist/darkly/bootstrap.min.css";
// light mode
import "bootswatch/dist/flatly/bootstrap.min.css";

export default function App() {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
        <Switch>
        <Redirect exact from="/" to="/login" />
            <ProtectedRoute exact path="/login" component={Admin} />
            <Route path="/login" component={Login} />
            {/*<Redirect from="*" to="/" />*/}
            </Switch>
        </Router>
    );
}
