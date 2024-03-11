import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from "./actions/authActions";

const Logout = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3001/logout");
        if (response.data === "User Logged out") {
            dispatch(logout());
        navigate('/login'); // Redirect to login page after logout
      } else {
        console.log("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
