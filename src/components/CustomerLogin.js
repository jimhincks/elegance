import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './App.css';

const CustomerLogin = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: ''
  });

  const [message, setMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      try {
        await Auth.signUp({
          username: form.username,
          password: form.password,
          attributes: {
            email: form.email,
            phone_number: form.phone_number
          }
        });
        setMessage('Sign up successful! Please check your email to confirm your account.');
      } catch (error) {
        setMessage(`Error signing up: ${error.message}`);
      }
    } else {
      try {
        await Auth.signIn(form.username, form.password);
        setMessage('Sign in successful!');
      } catch (error) {
        setMessage(`Error signing in: ${error.message}`);
      }
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setMessage('');
  };

  return (
    <div className="container">
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        {isSignUp && (
          <>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone_number"
                value={form.phone_number}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button onClick={toggleSignUp}>
        {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CustomerLogin;

