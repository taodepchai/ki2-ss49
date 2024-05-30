import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./login.scss";

const Bt3: React.FC = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (location.state) {
      setEmail(location.state.email);
      setPassword(location.state.password);
    }
  }, [location.state]);

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="login-button">
            Login an account
          </button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Bt3;
