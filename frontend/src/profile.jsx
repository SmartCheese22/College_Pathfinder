// Profile.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Get user authentication state from Redux store
  const userData = useSelector(state => state.auth.user); // Get user data from Redux store

  return (
    <div>
      <h2>User Profile</h2>
      {isLoggedIn ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Username: {userData.username}</p>
          <p>College: {userData.college}</p>
          <p>Major: {userData.major}</p>
          <p>Graduation Year: {userData.graduationYear}</p>
          {/* Add more user information fields as needed */}
        </div>
      ) : (
        <p>Please login to view your profile</p>
      )}
    </div>
  );
};

export default Profile;
