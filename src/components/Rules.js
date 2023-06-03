import React from 'react';
import "./rules.css";
import closeIcon from '../assets/close-icon.png';

export default function Rules({ onClose }) {
  return (
    <div className="Rules">
      <button onClick={onClose} className="close">
        <img src={closeIcon} alt="close-icon" className='close-icon' />
      </button>
      <div>
        <p> სწორად გამოიცანი სიტყვა</p>
        <p> ეცადე არ შეგეშალოს ასო</p>
        <p>იბრძოლე და არ დანებდე </p>
      </div>
    </div>
  );
}
