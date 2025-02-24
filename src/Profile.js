import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ profile, setProfile }) => {
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email || '',
    phone: profile.phone || '',
    password: '',
    profilePicture: profile.picture
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update profile state
    setProfile({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      picture: formData.profilePicture
    });

    // Update localStorage
    const savedData = JSON.parse(localStorage.getItem('signupData'));
    localStorage.setItem('signupData', JSON.stringify({
      ...savedData,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      profilePicture: formData.profilePicture
    }));

    navigate('/dashbord');
  };

  return (
    <div className="container mt-5">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="form-control"
          />
          {formData.profilePicture && (
            <img
              src={formData.profilePicture}
              alt="Profile Preview"
              className="mt-2"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          )}
        </div>

        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
