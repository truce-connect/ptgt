import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import './index.css'
// Find the root element
const rootElement = document.getElementById('root');

// Create a root and render the app
const root = createRoot(rootElement);
root.render(<App />);
