// src/Pages/SignUp/SignUp.jsx
import React, { useState } from 'react';
import Style from './SignUp.module.scss'; // Ensure this path is correct

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    setSuccessMessage(''); // Clear any previous success messages

    try {
      const response = await fetch('http://localhost:5000/api/signup', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text(); // Read response as text
      // console.log('Response Text:', responseText); // Log the response text

      if (!response.ok) {
        const result = JSON.parse(responseText); // Manually parse JSON
        throw new Error(result.message || 'Failed to sign up');
      }

      const result = JSON.parse(responseText); // Manually parse JSON
      setSuccessMessage(`Sign up successful! Welcome, ${result.user.username}!`);
    } catch (error) {
      setError(error.message); // Display the error message
    }
  };

  return (
    <div className={Style.signupContainer}>
      <h1>Signup</h1>
      {error && <p className={Style.error}>{error}</p>} {/* Display error message if set */}
      {successMessage && <p className={Style.success}>{successMessage}</p>} {/* Display success message if set */}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
