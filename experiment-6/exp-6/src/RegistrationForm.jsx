import React, { useState, useEffect } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      validationErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setRegisteredUsers((prevUsers) => [
        ...prevUsers,
        { name: formData.name.trim(), email: formData.email.trim() }
      ]);
      setSuccessMessage('Registration Successful!');
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
      setTimeout(() => setSuccessMessage(''), 4000);
    }
  };

  const containerStyle = {
    maxWidth: 450,
    margin: '40px auto',
    padding: 24,
    borderRadius: 12,
    boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    marginTop: 8,
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 14,
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    backgroundColor: '#008000',
    color: '#fff',
    padding: '10px 24px',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 15,
    marginTop: 10
  };

  const cardStyle = {
    backgroundColor: '#eaf6ea',
    padding: 18,
    marginTop: 24,
    borderRadius: 10,
    color: '#0a3f0a'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 18 }}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.name && (
            <p style={{ color: '#d8000c', marginTop: 6 }}>{errors.name}</p>
          )}
        </div>

        <div style={{ marginBottom: 18 }}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.email && (
            <p style={{ color: '#d8000c', marginTop: 6 }}>{errors.email}</p>
          )}
        </div>

        <div style={{ marginBottom: 18 }}>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.password && (
            <p style={{ color: '#d8000c', marginTop: 6 }}>{errors.password}</p>
          )}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </div>
      </form>

      {successMessage && (
        <p style={{ color: '#006400', textAlign: 'center', marginTop: 18 }}>
          {successMessage}
        </p>
      )}

      <div style={cardStyle}>
        <h2 style={{ textAlign: 'center', marginTop: 0 }}>Registered Users</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: 20, margin: 0 }}>
          {registeredUsers.map((user, index) => (
            <li key={`${user.email}-${index}`} style={{ marginBottom: 10 }}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RegistrationForm;
