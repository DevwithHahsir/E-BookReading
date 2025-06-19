import React, { useState } from "react";
import "./form.css";
import Header from "../header/Header";
import { Link } from "react-router";

// You can use your own images or royalty-free images from Unsplash/Pexels
const images = [
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80", // books
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // library
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80", // reading
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80", // study
];

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Password must be at least 6 characters";
    if (!form.confirmPassword) errs.confirmPassword = "Confirm your password";
    else if (form.password !== form.confirmPassword) errs.confirmPassword = "Passwords do not match";
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
      alert("Signup successful!");
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
          <img src={src} alt={`Library visual ${idx + 1}`} key={idx} />
        ))}
      </div>
      <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="signup-title">Create Account</h2>
        <div className="signup-input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.name && <span className="signup-error">{errors.name}</span>}
        </div>
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
        <div className="signup-input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.confirmPassword && <span className="signup-error">{errors.confirmPassword}</span>}
        </div>
        <Link to="/">
        <button type="submit" className="signup-button">Login</button>
        </Link>
        <div className="signup-links">
          <a href="#" className="signup-link">Forgot Password?</a>
          <span style={{ margin: "0 8px" }}>|</span>
          <a href="login" className="signup-link">Already have an account? Sign In</a>
        </div>
      </form>
    </div>

    </>
  );
};

export default SignupForm;