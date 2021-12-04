import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-light">
      <div className="container p-0 justify-content-end ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  w-100 justify-content-center">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#">
                Bosh Sahifa <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/unworked" className="nav-link" href="#">
                Biz Haqimizda
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/unworked" className="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/unworked" className="nav-link" href="#">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
