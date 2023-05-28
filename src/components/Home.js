import React from 'react'
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/background.jpg'
import './home.css'
import Rules from './Rules'
import {useState} from 'react'




export default function Home() {

  const [rules, setRules] = useState(false)

  const showRules = () => {
    setRules(!rules)

  }
  
  return (
    <>
     <div className="backgr-img">
         <img className='background' src={backgroundImg} alt="background-img" />
      </div>

      <div className="Home">
        <div className="home-inner">
              <h1 className='header'>ჩამოხრჩობანა</h1>
              {rules && < Rules />}
          <div className="buttons">
             {/* route from game to chamoxrchobana component */}
             <div className='change-component' > <Link to="/Game"> <button className='button'>დაიწყე თამაში</button> </Link> </div>
              
              
              <button onClick={showRules} className='rules-btn'>წესები</button>
          </div>
             
              
        </div>
    </div>
    </>
    
  )

  
}
