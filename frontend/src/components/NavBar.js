import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from '../Routes';


import "./navBar.css"

const NavBar = () => {

    return (
        <BrowserRouter>
            <ul className="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li>Username</li>
            </ul>
            <Routes />
        </BrowserRouter>
    )
}

export default NavBar