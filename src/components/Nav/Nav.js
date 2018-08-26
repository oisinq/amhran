import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

const Nav = ({origin}) => {
    let content;
    if (origin === "archive") {
      content = <div id="navWrapper"><div class="navLink"><Link to="/" className="link">Today</Link></div></div>;  
    } else if (origin === "main") {
        content = <div id="navWrapper"><div class="navLink"><Link to="/archive/" className="link">Archive</Link></div></div>
    }else {
        content = <div id="navWrapper"><div class="navLink"><Link to="/archive/" className="link">Archive</Link></div>
        <div class="navLink"><Link to="/" className="link">Today</Link></div>
        </div>
    }

    return(
    <nav className="Nav">
        <span id="logo"><Link to="/" className="link">amhran.ie</Link></span>
        {content}
    </nav>
);
}

export default Nav;