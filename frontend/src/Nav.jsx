import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "./Images/logo.jpg";
import "./Nav.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./actions/authActions";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Nav = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  const handleLogout = () => {
    dispatch(logout());
    // Clear authentication-related data
    localStorage.removeItem("token"); // Remove token from local storage
    // Redirect to the login page
    navigate("/login"); // Use navigate to redirect to login page
  };

  return (
    <nav className="Nav">
      <ul>
        <li className="nav-item">
          <Link to="/home">
            <img src={logo} alt="" style={{ width: "3rem" }} />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/forum">Forum</Link>
        </li>
        <li className="nav-item">
          <Link to="/search">Search</Link>
        </li>
        <li className="nav-item">
          <Link to="/compare">Compare</Link>
        </li>
        <li className="nav-item">
          <Link to="/collegepredictor">College predictor</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/setting">Settings <FaSearch /></Link>
        </li>
        {/* Conditional rendering based on login status */}
        {isLoggedIn ? (
          <li className="log_out" onClick={handleLogout}>
            Logout
          </li>
        ) : (
          <li className="log_out">
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
