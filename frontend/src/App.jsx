// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';  // Ensure this matches the correct casing
import RegisterPage from './pages/RegisterPage'; // Import RegisterPage
import LoginPage from './pages/LoginPage'; // Import LoginPage

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />      {/* Updated Route */}
                <Route path="/register" element={<RegisterPage />} />  {/* Register Page */}
                <Route path="/login" element={<LoginPage />} />  {/* Login Page */}
            </Routes>
        </Router>
    );
}

export default App;
