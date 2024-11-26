import React from "react";
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
             <li>
             <Link to="/">Home</Link>
             </li>
             <li>
             <Link to="/mailboxes">Mailboxes</Link>
             </li>
             <li>
             <Link to="/new-mailbox">New Mailbox</Link>
             </li>
            </ul>
          
        </nav>
)};

export default NavBar