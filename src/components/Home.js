import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/background.jpg';
import './home.css';
import Rules from './Rules';
import Win from './Win'


export default function Home() {
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <>
      <div className="backgr-img">
        <img className='background' src={backgroundImg} alt="background-img" />
      </div>

      <div className="Home">
        <div className="home-inner">
          <h1 className='header'>ჩამოხრჩობანა</h1>
          
          {showRules && <Rules onClose={toggleRules} />}
          <div className="home-buttons">
            <div className='change-component'>
              <Link to="/Hangman/Game">
                <button className='button'>დაიწყე</button>
              </Link>
            </div>
            <button onClick={toggleRules} className='rules-btn'>წესები</button>
          </div>
        </div>
      </div>
    </>
  );
}

