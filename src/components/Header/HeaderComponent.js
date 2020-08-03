import React from 'react';
import logo from './../../img/logo.png';
import './HeaderComponent.css';

function HeaderComponent() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" width="70px" />
      <nav>
        <ul className="nav__links">
          <li>
            <a>Course</a>
          </li>
          <li>
            <a>Event</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Help</a>
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
