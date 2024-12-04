import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    // <div className="home-page">
      <div className="content-container">
        {/* Left Section: Heading, description, and buttons */}
        <div className="text-section">
          <h1>Welcome to RoomieSync</h1>
          <p>
            A smart way to manage your shared living space. Collaborate with your roommates on events,
            expenses, and chat—all in one place.
          </p>
          <div className="cta-buttons">
            <Link to="/api/auth/login" className="cta-button">Login</Link>
            <Link to="/api/auth/register" className="cta-button cta-register">Register</Link>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="image-section">
          <img
            src="hero1.jpg"// Replace with your own image URL
            alt="Roommates Collaboration"
          />
        </div>
      </div>
    // </div>
  );
};

export default HomePage;
