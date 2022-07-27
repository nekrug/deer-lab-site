import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function Navbar() {
  // TODO: Make the logo link to Home bar instead of having explicit Home text
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mission">Our Mission</Link>
        </li>
        <li>
          <Link to="/research">Research</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
        <li>
          <Link to="/join">Join DEER Lab!</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;