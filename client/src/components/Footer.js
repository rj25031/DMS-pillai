import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Our work</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  individual fundraising 
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  corporate partnership
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  capacity building 
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  Volunteering
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  Events
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  Donates to INIDAdonates
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>About us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  Who we are 
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  Our Team
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  Accredited Partners
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  Contact us
                </NavLink>
              </li>
             
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Follow Us on</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                 FACEBOOK
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  DISCORD
                </NavLink>
              </li>

              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  INSTAGRAM 
                </NavLink>
              </li>

              <li className="nav-item mb-2">
                <NavLink to="#" className="nav-link p-0 text-body-secondary">
                  X
                </NavLink>
              </li>
             
            </ul>
          </div>

          

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2023 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
             
            </li>
            <li className="ms-3">
             
            </li>
            <li className="ms-3">
             
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
