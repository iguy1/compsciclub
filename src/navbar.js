

//import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
      <nav className = "navbar">
        <div className = "navbar-container">
        <ul className = "navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
            <li>
                <Link to="/members">Members</Link>
            </li>
            <li>
                <Link to="/events">Events</Link>
            </li>
            <li>
                <Link to="/join">Join</Link>
            </li>
        </ul>
        </div>
      </nav>
    );
  }
  
export default Navbar;