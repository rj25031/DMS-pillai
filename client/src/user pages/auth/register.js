import React, { useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar.js";
import "../../css/register.css";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
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
    user.append("Fname", formData.firstName);
    user.append("Lname", formData.lastName);
    user.append("Gender", formData.gender);
    const userData = await axios.post("/api/user/register", user);
    console.log(userData.data.message); 
    if(userData.data.success){
      navigate('/user-details')
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
      })
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
        <h1 className="text-center card-title">User SignUp</h1>

        <input
          type="text"
          name="firstName"
          id="fname"
          placeholder="First Name"
          className="rounded p-2"
          required
          autoFocus
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          id="lname"
          placeholder="Last Name"
          className="rounded p-2"
          required
          autoFocus
          value={formData.lastName}
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
            <span className="card-text">Minimum of 8 characters</span><br />
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

        <span className="card-text">Minimum of 8 characters</span>
        <br />

        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="Male"
            name="gender"
            className="custom-control-input"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label className="custom-control-label" htmlFor="Male">
            Male
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="Female"
            name="gender"
            className="custom-control-input"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label className="custom-control-label" htmlFor="Female">
            Female
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
      <NavLink to="/login"> <p> Already have an account? LogIn here !! </p></NavLink>
      </form>
    </div>
  );
};

export default RegistrationForm;
