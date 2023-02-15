import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { click } from '@testing-library/user-event/dist/click';

const header_sectionRight_button = document.querySelector(".header-sectionRight_button");
const header_sectionCenter = document.querySelector(".header-sectionCenter");
const header_sectionRight = document.querySelector(".header-sectionRight");

header_sectionRight_button.addEventListener("click", () => {
  header_sectionCenter.classList.toggle("header-section_visible")
  header_sectionRight.classList.toggle("header-section_visible")
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
