import React, { useState } from "react";
import { Link } from "react-router";
import "./form.css";
import Header from "../header/Header";

// Different images for login form
const images = [
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", // laptop
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // bookshelf
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80", // library desk
  "https://images.unsplash.com/photo-1467320424268-f91a16cf7c77?auto=format&fit=crop&w=400&q=80", // reading area
];

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";
    if (!form.password) errs.password = "Password is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      alert("Login successful!");
      setForm(initialState);
    } else {
      setErrors(errs);
    }
  };

  return (

    <>
    <Header/>
    
    <div className="library-auth-wrapper">
      <div className="library-image-grid">
        {images.map((src, idx) => (
          <img src={src} alt={`Library login visual ${idx + 1}`} key={idx} />
        ))}
      </div>
      <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="signup-title">Sign In</h2>
        <div className="signup-input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.email && <span className="signup-error">{errors.email}</span>}
        </div>
        <div className="signup-input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.password && <span className="signup-error">{errors.password}</span>}
        </div>
        
        <button type="submit"  className="signup-button">Login</button>
      
        <div className="signup-links">
          <a href="#" className="signup-link">Forgot Password?</a>
          <span style={{ margin: "0 8px" }}>|</span>
          <a href="signup" className="signup-link">Don't have an account? Sign Up</a>
        </div>
      </form>
    </div>
    </>
  );
};

export default LoginForm;