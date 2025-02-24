import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profilePicture: null
  });

   const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ 
      ...formData, 
      [name]: files ? files[0] : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('signupData', JSON.stringify(formData));
    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <div style={{
        background: 'linear-gradient(135deg, #0c8ae4, #9609c1)',
        minHeight: '100vh',
        padding: '20px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Profile Picture:</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleInputChange}
            className="form-control"
            accept="image/*"
          />
        </div>
                <button type="submit" className="btn btn-primary mt-3 me-3">Signup</button>
                <button 
                  type="button" 
                  className="btn btn-secondary mt-3"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
      </form>
    </div>
  );
};

export default Signup;
