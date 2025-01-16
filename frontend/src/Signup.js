// Signup.js
import React, { useState } from "react";
import "./Login.css";
import logo from "./Images/logo-placeholder.png";
import ReCAPTCHA from "react-google-recaptcha";

const Signup = ({ onSwitchForm }) => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }
    alert("Account created successfully!");
  };

  return (
    <div className="container">
      <img src={logo} alt="Bluestock Logo" className="logo" />
      <form className="form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="................."
            required
          />
        </div>

        <div className="form-group">
          <ReCAPTCHA
            sitekey="6Lere7gqAAAAADfIVh1DU1lNIWQ1VT5Z57iMmuq7" 
            onChange={handleCaptchaChange}
          />
        </div>

        <button
          type="submit"
          className="btn primary"
          disabled={!captchaVerified}
        >
          Sign Up
        </button>

        <p>or sign up with</p>

        <button type="button" className="btn google">
          Continue with Google
        </button>

        <p>
          <button
            type="button"
            className="link"
            onClick={() => onSwitchForm("login")}
          >
            Already have an account? Sign in here
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
