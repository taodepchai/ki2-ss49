import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CustomLink: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    const currentPath = window.location.pathname;
    if (currentPath === '/home-page') {
      navigate('/home-page');
    } else {
      navigate('/not-found');
    }
  };

  return (
    <div>
      <Link to="/home-page" onClick={handleLinkClick}>Go to Home Page</Link>
    </div>
  );
};

export default CustomLink;
