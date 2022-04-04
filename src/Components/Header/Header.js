import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link ">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="nav-link ">
                <b>Reviews</b>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="nav-link ">
                <b>Dashboard</b>
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="nav-link ">
                <b>Blogs</b>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link ">
                <b>About</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
