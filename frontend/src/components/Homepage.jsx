// frontend/src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // External CSS file for styling

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to RoomSync</h1>
                <p>Your ultimate roommate collaboration platform</p>
            </header>

            <div className="home-content">
                <section className="home-features">
                    <h2>Features</h2>
                    <ul>
                        <li>💬 Live Chat with Roommates</li>
                        <li>📅 Shared Calendar for Room Events</li>
                        <li>💸 Manage Expenses with Roommates</li>
                    </ul>
                </section>

                <div className="home-actions">
                    <Link to="/register" className="home-button">Register</Link>
                    <Link to="/login" className="home-button">Login</Link>
                </div>
            </div>

            <footer className="home-footer">
                <p>RoomSync &copy; 2024. Bringing harmony to shared living.</p>
            </footer>
        </div>
    );
};

export default HomePage;
