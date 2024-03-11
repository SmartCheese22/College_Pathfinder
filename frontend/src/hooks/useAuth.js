// src/hooks/useAuth.js
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    // Return true if the user is logged in, otherwise redirect to login page
    return isLoggedIn ? true : <Navigate to="/login" />;
};

export default useAuth;
