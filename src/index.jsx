import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'  // adjust path as needed
import App from './App'; // Adjust the path to match your project structure
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
  <GoogleOAuthProvider clientId="your-client-id">
    <App />
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
