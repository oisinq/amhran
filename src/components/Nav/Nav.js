import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';
import Logo from '../Logo/Logo';

const Nav = ({origin}) => {
    let content;
    if (origin === "archive") {
      content = <div id="navWrapper"><div className="navLink"><Link to="/" className="link">Today</Link></div></div>;  
    } else if (origin === "main") {
        content = <div id="navWrapper"><div className="navLink"><Link to="/archive/" className="link">Archive</Link></div></div>
    }else {
        content = <div id="navWrapper"><div className="navLink"><Link to="/archive/" className="link">Archive</Link></div>
        <div className="navLink"><Link to="/" className="link">Today</Link></div>
        </div>
    }

    return(
    <nav className="Nav">
        <Logo/>
        {content}
    </nav>
);
}

export default Nav;