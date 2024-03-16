import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Navbar from "../../components/Navbar.js";
import "../../css/register.css";
import axios from "axios";

const AgencyRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    accountType: "", // Changed from gender to accountType
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
    user.append("Name", formData.name); // Changed from Fname to Name
    user.append("AccountType", formData.accountType); // Changed from Gender to AccountType
    const userData = await axios.post("/api/user/register", user);
    console.log(userData.data.message);
    setFormData({
      name: "",
      email: "",
      password: "",
      accountType: "", // Reset accountType field
    });
  };

  return (
    <div className="header">
      <Navbar />
      <div className>
            <div className="container">
                    <ul>
                        <li> <NavLink to="/"><i className="bi bi-chevron-double-right"></i> Back </NavLink></li>
                    </ul>
            </div>
        </div>
      <form
        className="card card-body w-25 pos"
        onSubmit={handleSubmit}
        id="registration-form"
      >
        <h1 className="text-center card-title">Register Form:</h1>

        <input
          type="text"
          name="name" // Changed from firstName to name
          id="fname"
          placeholder="Name" // Changed from First Name to Name
          className="rounded p-2"
          required
          autoFocus
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="rounded p-2"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="rounded p-2"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <br />

        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="Government"
            name="accountType" // Changed from gender to accountType
            className="custom-control-input"
            value="government" // Changed values from male to government
            checked={formData.accountType === "government"} // Changed from male to government
            onChange={handleChange}
          />
          <label className="custom-control-label" htmlFor="Government">
            Government
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="Private"
            name="accountType" 
            className="custom-control-input"
            value="private" 
            checked={formData.accountType === "private"} 
            onChange={handleChange}
          />
          <label className="custom-control-label" htmlFor="Private">
            Private
          </label>
        </div>
        <br />

        <button
          className="btn btn-block btn-success btn-lg"
          type="submit"
          id="button"
        >
          SUBMIT
        </button>
        <NavLink to="/agency-register"> <p> Already have an account? LogIn here !! </p></NavLink>

      </form>
    </div>
  );
};

export default AgencyRegistrationForm;
