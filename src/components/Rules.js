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
        <p> ასოების გამოყენებით უნდა გამოიცნო სიტყვა</p>
        <p> ასოს შეშლისას, წაგებას ერთი ნაბიჯით უახლოვდები</p>
        <p> არ დანებდე და აუცილებლად გაიმარჯვებ </p>
      </div>
    </div>
  );
}
