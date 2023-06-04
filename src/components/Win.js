import React from 'react'
import Lost from './Lost'
import winImg from '../assets/win.jpg';
import { Link } from 'react-router-dom';
import './win.css'

 function Win() {
  return (
    <div className='Lost'>

    <div className="backgr-img">
        <img className='death-background' src={winImg} alt="background-img" />
    </div>

      <div className='lost-interface'>
        <h1 className='lost-header'>გილოცავ მოგებას, შენ სიტყვა გამოიცანი!</h1>

        <div className="change-component">
          <Link to="/Hangman/game">
            <button className="button-win">კიდევ ითამაშე</button>
          </Link>
        </div>
     </div>

      </div>
  )
}

export default Win;
