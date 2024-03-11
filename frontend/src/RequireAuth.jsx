// RequireAuth.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Get user authentication state from Redux store
  const navigate = useNavigate();

  // Check if user is logged in, if not, redirect to login page
  if (!isLoggedIn) {
    // Redirect to login page
    navigate('/login');
    return null; // Render nothing if not logged in
  }

  // Render the child components if logged in
  return <>{children}</>;
};

export default RequireAuth;
