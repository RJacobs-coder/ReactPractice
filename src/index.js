import React from 'react';
//import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client'
import './sassFiles/mainstylesheet.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


 */


// Needed for React 18 - May need to change soon.
const container = document.getElementById('root')
const root = createRoot(container)

// Import Arrays for easy asset management



root.render(<App />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
