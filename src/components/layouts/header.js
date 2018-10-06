import React from "react";
import Link from "react-router-dom/Link";

const header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-warning mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand ">
          {props.branding}
        </Link>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-danger">
            <i className='fas fa-home'></i>
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/contact/add" className="nav-link text-danger">
            <i className='fas fa-plus'></i>
              Add Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about/" className="nav-link text-danger">
            <i className='fas fa-question'></i>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default header;
