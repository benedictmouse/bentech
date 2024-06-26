import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/Links";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: "100%" }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={appLinks?.Landing} className="nav-link active" aria-current="page">
                Bentech
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={appLinks?.Contact}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active " to={appLinks?.About}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;