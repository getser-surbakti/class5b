import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import Home from './home';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
