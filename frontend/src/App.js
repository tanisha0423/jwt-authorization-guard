import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <header className="header">
          <h1>🔐 JWT Auth Guard</h1>
          <p>Secure your world, one token at a time.</p>
        </header>
        <main className="main-content">
          <div className="form-wrapper">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
