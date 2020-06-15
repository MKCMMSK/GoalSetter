import React from "react";
import { Link } from 'react-router-dom';

import "./navBar.css"

const NavBar = () => {

    return (
        <ul className="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/Analytics">Analytics</Link></li>
            <li>Username</li>
        </ul>
    )
}

export default NavBar