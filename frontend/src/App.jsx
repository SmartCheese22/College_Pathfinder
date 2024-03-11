import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import { useSelector } from 'react-redux';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Logout from './logout';
import SignupS from './SignupS';
import SignupG from './SignupG';
import LoginS from './LoginS';
import LoginG from './LoginG';
import Profile from './profile';

// Custom component to handle authentication check
const ProtectedRoute = ({ element, path }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/registerCollegeS" element={<SignupS />} />
          <Route path="/registerCollegeG" element={<SignupG />} />
          <Route path="/loginCollegeS" element={<LoginS />} />
          <Route path="/loginCollegeG" element={<LoginG />} />
          <Route path="/getUserDetailsByEmailCollegeS/:email" element={<SignupG />} />
          <Route path="/getUserDetailsByEmail/:email" element={<SignupG />} />
          <Route path="/getUserDetailsByEmailCollegeS/:email" element={<Profile  />} />
          <Route path="/getUserDetailsByEmail/:email" element={<Profile  />} />

          {/* Protected routes */}
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} /> {/* Wrap with ProtectedRoute */}
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} /> {/* Wrap with ProtectedRoute */}
          <Route path="/logout" element={<ProtectedRoute element={<Logout />} />} /> {/* Wrap with ProtectedRoute */}
          {/* Define more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
