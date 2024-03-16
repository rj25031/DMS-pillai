import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/App.css";
//pages
import HomePage from "./user pages/HomePage";
import AboutPage from "./user pages/AboutPage";
import LoginForm from "./user pages/auth/login";
import RegistrationForm from "./user pages/auth/register";
import AgencyLoginForm from "./agency pages/auth/login";
import AgencyRegistrationForm from "./agency pages/auth/register";
import UserDetails from "./user pages/auth/userDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/agency-login" element={<AgencyLoginForm/>}/>
        <Route path="/agency-register" element={<AgencyRegistrationForm/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user-details" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
