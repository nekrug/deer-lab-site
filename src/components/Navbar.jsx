import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function Navbar() {
  // TODO: Make the logo link to Home bar instead of having explicit Home text
  return (
    <nav className="navbar navbar-expand-md navbar-medium bg-light">
      <a className="navbar-brand" href="#">DEER Lab</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto navbar-collapse">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mission">Our Mission</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/research">Research</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/members">Members</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/join">Join DEER Lab!</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/studyadmin">Study Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;