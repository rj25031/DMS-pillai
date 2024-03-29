import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../css/login.css";
import axios from "axios";

const AgencyLoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = new FormData();
    user.append("Email", formData.email);
    user.append("Password", formData.password);
    // user.append("Fname", formData.firstName);
    // user.append("Lname", formData.lastName);
    // user.append("Gender", formData.gender);
    const userData = await axios.post("/api/user/login", user);
    console.log(userData.data.message);
    setFormData({
      // firstName: "",
      // lastName: "",
      email: "",
      password: "",
      // gender: "",
    });
  };

  return (
    <>
    <Navbar></Navbar>
    <div className>
            <div className="container">
                    <ul>
                        <li> <NavLink to="/"><i className="bi bi-chevron-double-right"></i> Back </NavLink></li>
                    </ul>
            </div>
        </div>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
         
          <h1 className="h3 mb-3 fw-normal">Agency sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder=""
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder=""
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value={formData.rememberMe}
              id="flexCheckDefault"
              name="rememberMe"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-success w-100 py-2" type="submit">
            Sign in
          </button>
          <NavLink to="/agency-register">
            {" "}
            <p> Don't have an account? Register here !! </p>
          </NavLink>
        </form>
      </main>
    </>
  );
};

export default AgencyLoginForm;
