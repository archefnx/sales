import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getSeller } from './http/api';

const root = ReactDOM.createRoot(document.getElementById('root'));

const test = async () => {
  const response = await getSeller()
  return response   
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
