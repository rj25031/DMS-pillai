import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid ">
    
              <div id="menu" className="nav-row d-none d-lg-flex  row">
                <ul className="d-inline-block">
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/about">About US</NavLink>
                  </li>
                  {/* <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/">Disaster</NavLink>
                  </li> */}
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/">News</NavLink>
                  </li>
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/">Contact Us</NavLink>
                  </li>
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/login">User Login/Signup</NavLink>
                  </li>
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/agency-login">Agency Login/Signup</NavLink>
                  </li>

                  <h1 className="heading-logo">DMS</h1>
                </ul>
                
              </div>
            </div>
         
    
  );
};

export default Navbar;
