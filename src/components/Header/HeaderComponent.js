import React from 'react';
import logo from './../../img/logo.png';
import './HeaderComponent.css';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" width="50px" />
      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/courses">Course</Link>
          </li>
          <li>
            <Link>Event</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Help</Link>
          </li>
          <li>
            <button className="header--button">Login</button>
          </li>
          <li>
            <button className="header--button">Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
