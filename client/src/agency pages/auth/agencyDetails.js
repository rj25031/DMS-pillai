import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const AgencyRegistration = () => {
  const [formData, setFormData] = useState({
    agencyName: '',
    agencyType: '',
    address: '',
    city: '',
    state: '',
    country: '',
    phoneNumber: '',
    email: '',
    website: '',
    equipment: '',
    equipmentQuantity: '',
    vehicles: '',
    vehicleQuantity: '',
    menPower: '',
    menPowerQuantity: ''
    // Add more fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form data to the backend
    try {
      const response = await axios.post("/api/agency/register", formData);
      console.log(response.data.message);
      // Reset form after successful submission
      setFormData({
        agencyName: '',
        agencyType: '',
        address: '',
        city: '',
        state: '',
        country: '',
        phoneNumber: '',
        email: '',
        website: '',
        equipment: '',
        equipmentQuantity: '',
        vehicles: '',
        vehicleQuantity: '',
        menPower: '',
        menPowerQuantity: ''
        // Reset additional fields as necessary
      });
    } catch (error) {
      console.error('Registration failed:', error);
    }
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
          <h1 className="h3 mb-3 fw-normal">Agency Registration</h1>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="agencyName" className="form-label">Agency Name</label>
              <input
                type="text"
                className="form-control"
                id="agencyName"
                name="agencyName"
                value={formData.agencyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="agencyType" className="form-label">Agency Type</label>
              <input
                type="text"
                className="form-control"
                id="agencyType"
                name="agencyType"
                value={formData.agencyType}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="website" className="form-label">Website</label>
              <input
                type="text"
                className="form-control"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>

          <h2 className="h4 my-3">Resource Details</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="equipment" className="form-label">Equipment</label>
              <input
                type="text"
                className="form-control"
                id="equipment"
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="equipmentQuantity" className="form-label">Equipment Quantity</label>
              <input
                type="number"
                className="form-control"
                id="equipmentQuantity"
                name="equipmentQuantity"
                value={formData.equipmentQuantity}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="vehicles" className="form-label">Vehicles</label>
              <input
                type="text"
                className="form-control"
                id="vehicles"
                name="vehicles"
                value={formData.vehicles}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="vehicleQuantity" className="form-label">Vehicle Quantity</label>
              <input
                type="number"
                className="form-control"
                id="vehicleQuantity"
                name="vehicleQuantity"
                value={formData.vehicleQuantity}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="menPower" className="form-label">Men Power</label>
              <input
                type="text"
                className="form-control"
                id="menPower"
                name="menPower"
                value={formData.menPower}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="menPowerQuantity" className="form-label">Men Power Quantity</label>
              <input
                type="number"
                className="form-control"
                id="menPowerQuantity"
                name="menPowerQuantity"
                value={formData.menPowerQuantity}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
        </form>
      </main>
    </>
  );
};

export default AgencyRegistration;
