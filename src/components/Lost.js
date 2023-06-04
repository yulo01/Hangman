import React from 'react'
import './lost.css'
import Home from './Home'
import deathImg from '../assets/death.jpg';
import { Link } from 'react-router-dom';

 function Lost(props) {
  return (
    <div className='Lost'>

    <div className="backgr-img">
        <img className='death-background' src={deathImg} alt="background-img" />
    </div>

      <div className='lost-interface'>
        <h1 className='lost-header'>სამწუხაროდ წააგე, სიტყვა ვერ გამოიცანი</h1>

        <div className="change-component">
        <Link to="/Hangman/game">
            <button className="button">სცადე</button>
          </Link>
        </div>
     </div>

      </div>
   
  )
}

export default Lost;
