import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import the store
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap App component with Provider and pass the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
