import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default function NavMenu() {
    /*     const [navbar, setNavbar] = React.useState(false);
     *//*     const toggleNavbar = () => {
           setNavbar(!navbar);
       } */

    return (
        <header>
            <div className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
                <div className="container">
                    <Link to="/" className="navbar-brand">ZIMS</Link>
                    <div className="d-sm-inline-flex flex-sm-row-reverse collapse navbar-collapse">
                        <ul className="navbar-nav flex-grow">
                            <div className="nav-item">
                                <Link className="text-dark" to="/">Home</Link>
                            </div>
                            <div className="nav-item">
                                <Link className="text-dark" to="/counter">Counter</Link>
                            </div>
                            <div className="nav-item">
                                <Link className="text-dark" to="/fetch-data">Fetch data</Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
