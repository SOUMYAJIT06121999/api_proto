import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashbord from './Dashbord';
import CompanyInfo from './CompanyInfo';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [profile, setProfile] = useState({
    name: 'example',
    email: 'email@example.com',
    phone: '',
    picture: '/profile-pic.jpg'
  });

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">API </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/company-info">Company Info</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login setProfile={setProfile} />} />
        <Route path="/dashbord" element={<Dashbord profile={profile} />} />
        <Route path="/company-info" element={<CompanyInfo />} />
        <Route path="/profile" element={<Profile profile={profile} setProfile={setProfile} />} />
      </Routes>
    </Router>
  );
}

export default App;
