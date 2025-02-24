import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setProfile }) => {
  const [credentials, setCredentials] = useState({
    name: '',
    password: '',
    email: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('signupData'));
    
    if (savedData && savedData.name === credentials.name && savedData.password === credentials.password) {
      alert('Login successful!');
      setProfile({
        name: savedData.name,
        email: savedData.email || '',
        phone: savedData.phone || '',
        picture: savedData.profilePicture ? URL.createObjectURL(savedData.profilePicture) : '/default-profile.jpg'
      });
      navigate('/dashbord');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div 
      className="container mt-5"
      style={{
        background: 'linear-gradient(135deg, #0c8ae4, #9609c1)',
        minHeight: '100vh',
        padding: '20px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={credentials.name}
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
            value={credentials.password}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
};

export default Login;
