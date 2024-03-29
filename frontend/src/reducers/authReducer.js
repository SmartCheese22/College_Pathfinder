// src/redux/authReducer.js
const initialState = {
    user: null, // Store user data
    isLoggedIn: false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isLoggedIn: false
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  