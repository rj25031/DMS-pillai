import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <header className="container-fluid ">
      <div className="shadow">
      
        <div className="container p-2">
          <div className="row top-ro">
            <div className="col-lg-3 col-md-12 pt-2">
              {/* <img
                className="max-250 my-2 my-lg-4"
                src="assets/images/logo.jpg"
                alt=""
              /> */}
              <NavLink
                data-bs-toggle="collapse"
                data-bs-target="#menu"
                className="float-end d-lg-none pt-1 ps-3"
              >
                <i className="bi pt-1 fs-11 cp bi-list"></i>
              </NavLink>
            </div>
            <div className="col-md-9  logiki">
              <div className="top-row  bg-primary d-none d-lg-flex p-2 rounded-pill row">
                <ul className="text-white ">
                  <li className="float-start p-2">
                    <i className="bi fs-6 bi-geo-alt"></i> 1'st Floor Vplaza,
                    boisar, maharastra, India
                  </li>
                  <li className="float-end p-2">
                    <i className="bi s-6 bi-phone-vibrate"></i> +91 878 8783 997
                  </li>
                  <li className="float-end p-2">
                    <i className="bi s-6 bi-envelope-x"></i> support@dhms.com
                  </li>
                </ul>
              </div>
              <div id="menu" className="nav-row d-none d-lg-flex  row">
                <ul className="d-inline-block">
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/about">About US</NavLink>
                  </li>
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/">Disaster</NavLink>
                  </li>
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/">News</NavLink>
                  </li>
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/">Contact Us</NavLink>
                  </li>
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/register">User Login/Signup</NavLink>
                  </li>
                  <li className="float-none float-md-start p-4 px-4">
                    <NavLink to="/">Agency Login/Signup</NavLink>
                  </li>
                 
 

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
