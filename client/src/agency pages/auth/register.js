import React, { useState } from "react";
import { NavLink,useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar.js";
import "../../css/register.css";
import axios from "axios";

const AgencyRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    accountType: "", 
  });
  const navigate = useNavigate();

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
    user.append("Name", formData.name); 
    user.append("AccountType", formData.accountType); 
    const userData = await axios.post("/api/user/register", user);
    console.log(userData.data.message);
    if(userData.data.success){
      navigate('/agency-details')
      setFormData({
        name: "",
        email: "",
        password: "",
        accountType: "", 
      });
    }
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
          name="name" 
          id="fname"
          placeholder="Name" 
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
            name="accountType" 
            className="custom-control-input"
            value="government" 
            checked={formData.accountType === "government"} 
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
