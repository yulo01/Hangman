import React from 'react';
import { Link } from 'react-router-dom';

function Game() {
 
  return (
    <div className="Game">
      <h1>Game Component</h1>

        {/* route from game to chamoxrchobana component */}
      <div className='change-component' > <Link to="/chamoxrchobana"> <button>Back</button> </Link> </div>
      
      </div>
  );
  
}

export default Game;

