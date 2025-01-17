// Login.js
import React, { useState } from "react";
import "./Login.css";
import logo from "./Images/logo-placeholder.png";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const Login = ({ onSwitchForm }) => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [error, setError] = useState('');

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }
    alert("Form submitted successfully!");
  };

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      const decoded = jwt_decode(credentialResponse.credential);
      
      // Log the user information - you can see this in browser console
      console.log('User Info:', decoded);
      
      // Here you would send this information to your backend
      const userInfo = {
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        // Add any other fields you need
      };

      // TODO: Send userInfo to your backend API
      // Example:
      // fetch('your-backend-api/auth/google', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     credential: credentialResponse.credential,
      //     userInfo: userInfo
      //   })
      // });

      // For now, just show success message
      alert('Successfully signed in with Google!');
      
    } catch (error) {
      console.error('Error processing Google sign-in:', error);
      setError('Failed to process Google sign-in. Please try again.');
    }
  };

  const handleGoogleError = () => {
    setError('Failed to sign in with Google. Please try again.');
  };

  return (
    <div className="container">
      <img src={logo} alt="Bluestock Logo" className="logo" />
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>

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
          <button
            type="button"
            className="forgot-password"
            onClick={() => onSwitchForm("forgotPassword")}
          >
            Forgot Password?
          </button>
        </div>

        <div className="checkbox-wrapper">
          <label>
            <input type="checkbox" name="keepSignedIn" />
            Keep me signed in
          </label>
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
          Login
        </button>

        <p>or sign in with</p>

        <div className="google-login-container">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
            theme="filled_blue"
            shape="rectangular"
            size="large"
            text="continue_with"
            width="280px"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <p>
          <button
            type="button"
            className="link"
            onClick={() => onSwitchForm("signup")}
          >
            Create an account
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
