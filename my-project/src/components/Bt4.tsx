import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./register.scss";

const Bt4: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/login', { state: { email, password } });
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className="register-title">Create account</h2>
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
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-input"
              placeholder="********"
            />
          </div>
          <button type="button" className="register-button" onClick={handleRegister}>
            Create an account
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Bt4;
