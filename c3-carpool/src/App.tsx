import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage"; // Ensure this import
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ListRidePage from "./pages/ListRidePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/list-ride" element={<ListRidePage />} />

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
