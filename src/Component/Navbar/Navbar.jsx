import React from 'react';
import './Navbar.css'
import { NavLink } from "react-router-dom";




function Navbar() {
    return (
        <main>
          <nav className="navbar navbar-expand-lg fixed-top  " style={{ backgroundColor: 'rgb(30,30,30)'}}>
            <div className="container ">
              <NavLink className="navbar-brand  brand-name " to="/">
                NIYIWURLD
              </NavLink>
              <button
                className="navbar-toggler border border-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="#">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="#">
                      Link
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link disabled">Disabled</NavLink>
                  </li> */}
                </ul>
                <div className="me-5"  >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item me-3 ">
                      <NavLink className="nav-link active navlis" aria-current="page" to="/Get-to-know-me">
                        Get to know me
                      </NavLink>
                    </li>
                    <li className="nav-item me-3">
                      <NavLink className="nav-link active navlis" aria-current="page" to="/projects">
                        Projects
                      </NavLink>
                    </li>
                    <li className="nav-item me-3">
                      <NavLink className="nav-link active navlis" aria-current="page" to="/contact">
                        Contacts
                      </NavLink>
                    </li>
                    <li className="nav-item me-3">
                      <NavLink className="nav-link active navlis" aria-current="page" to="/resume">
                        Resume
                      </NavLink>
                    </li>
                    {/* <li className="nav-item me-5">
                      <NavLink className="nav-link " to="#">
                        Link
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                        Link
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link disabled">Disabled</NavLink>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </main>
      );
}

export default Navbar;