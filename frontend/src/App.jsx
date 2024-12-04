import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Using Routes for v6
import HomePage from "./components/HomePage"; // Ensure correct import paths and casing
import RegisterPage from "./pages/RegisterPage"; // Correct the import paths and component names
import LoginPage from "./pages/LoginPage"; // Correct the import paths and component names
// import NavBar from "./components/NavBar"; // Import NavBar

function App() {
  return (
    <Router>
      {/* <NavBar />  */}
      <Routes>
        {/* Use 'element' prop instead of 'component' in react-router-dom v6 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/api/auth/register" element={<RegisterPage />} />
        <Route path="/api/auth/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
