import React, { useState } from 'react';
import Layout from '../../components/Layout';
import '../../css/register.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log(formData);
  };

  return (
    <Layout>

    <form className="card card-body w-25 pos" onSubmit={handleSubmit} id="registration-form">
      <h1 className="text-center card-title">Register Form:</h1>

      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        className="rounded p-2"
        required
        autoFocus
        value={formData.username}
        onChange={handleChange}
        /><br />

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

      <span className="card-text">please enter a valid email address</span><br />

      <input
        type="password"
        name="password"
        id="password"
        minLength="8"
        maxLength="10"
        placeholder="password"
        className="rounded p-2"
        required
        value={formData.password}
        onChange={handleChange}
        />

      <span className="card-text">Minimum of 8 characters</span><br />

      <input
        type="password"
        name="confirmPassword"
        minLength="8"
        maxLength="10"
        placeholder="Confirm password"
        className="rounded p-2"
        required
        value={formData.confirmPassword}
        onChange={handleChange}
        /><br />

      <div className="custom-control custom-radio">
        <input
          type="radio"
          id="Male"
          name="gender"
          className="custom-control-input"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
          />
        <label className="custom-control-label" htmlFor="Male">Male</label>
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id="Female"
          name="gender"
          className="custom-control-input"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
          />
        <label className="custom-control-label" htmlFor="Female">Female</label>
      </div><br />

      {/* <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
          required
          checked={formData.termsAccepted}
          onChange={handleChange}
          />
        <label className="custom-control-label" htmlFor="customCheck1">I have read and accept term and conditions</label>
      </div><br /> */}

      <button className="btn btn-block btn-success btn-lg" type="submit" id="button">SUBMIT</button>
    </form>
</Layout>
  );
};

export default RegistrationForm;
