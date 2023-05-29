import React from 'react';
import { Link } from 'react-router-dom';
import gameBackground from "../assets/game-background.jpg"
import './game.css'

function Game() {
 
  return (
    <>
    <div className="backgr-img">
        <img  className ='game-background' src={gameBackground} alt="game-background"  />
    </div>


    <div className="Game">
      

      <div className="buttons">
        <button className="button-aso">ა</button>
        <button className="button-aso">ბ</button>
        <button className="button-aso">გ</button>
        <button className="button-aso">დ</button>
        <button className="button-aso">ე</button>
        <button className="button-aso">ვ</button>
        <button className="button-aso">ზ</button>
        <button className="button-aso">თ</button>
        <button className="button-aso">ი</button>
        <button className="button-aso">კ</button>
        <button className="button-aso">ლ</button>
        <button className="button-aso">მ</button>
        <button className="button-aso">ნ</button>
        <button className="button-aso">ო</button>
        <button className="button-aso">პ</button>
        <button className="button-aso">ჟ</button>
        <button className="button-aso">რ</button>
        <button className="button-aso">ს</button>
        <button className="button-aso">თ</button>
        <button className="button-aso">უ</button>
        <button className="button-aso">ფ</button>
        <button className="button-aso">ქ</button>
        <button className="button-aso">ღ</button>
        <button className="button-aso">ყ</button>
        <button className="button-aso">შ</button>
        <button className="button-aso">ჩ</button>
        <button className="button-aso">ც</button>
        <button className="button-aso">ძ</button>
        <button className="button-aso">წ</button>
        <button className="button-aso">ჭ</button>
        <button className="button-aso">ხ</button>
        <button className="button-aso">ჯ</button>
        <button className="button-aso">ჰ</button>
      </div>



        {/* route from game to chamoxrchobana component */}
      <div className='change-component' > <Link to="/chamoxrchobana"> <button className='button'>Back</button> </Link> </div>
      
      </div>
      </>
  );
  
}

export default Game;

