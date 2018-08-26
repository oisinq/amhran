import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
    return(
    <nav className="Nav">
        <span><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></span>
        <span><Link to="/archive/" style={{ textDecoration: 'none' }}>Archive</Link></span>
    </nav>
);
}

export default Nav;