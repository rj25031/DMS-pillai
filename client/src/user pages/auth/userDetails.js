import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const UserDetails = () => {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    country: '',
    phoneNumber: '',
    emergencyContact: '',
    skills: '',
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = new FormData();
    user.append("Address", formData.address);
    user.append("City", formData.city);
    user.append("State", formData.state);
    user.append("Country", formData.country);
    user.append("PhoneNumber", formData.phoneNumber);
    user.append("EmergencyContact", formData.emergencyContact);
    user.append("Skills", formData.skills);
    user.append("Availability", formData.availability);
    // Append more fields as necessary
    const userData = await axios.post("/api/user/login", user);
    console.log(userData.data.message);
    setFormData({
      address: "",
      city: "",
      state: "",
      country: "",
      phoneNumber: "",
      emergencyContact: "",
      skills: "",
      availability: "",
    })
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <ul>
          <li><NavLink to="/"><i className="bi bi-chevron-double-right"></i> Back</NavLink></li>
        </ul>
      </div>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Volunteer Registration</h1>

          <div className="row g-3">
          
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="country" className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="skills" className="form-label">Skills</label>
              <input
                type="text"
                className="form-control"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="availability" className="form-label">Availability</label>
              <input
                type="text"
                className="form-control"
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default UserDetails;
