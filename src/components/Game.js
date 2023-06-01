import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gameBackground from "../assets/game-background.jpg";
import './game.css';
import Man from './Man';
import Lost from './Lost'



function Game() {
  const [word, setWord] = useState('ბათუმი');
  const [guessedWord, setGuessedWord] = useState(Array(word.length).fill('_'));
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const maxMistakes = 5;

  const handleGuess = (letter) => {
    if (word.includes(letter)) {
      const updatedWord = word.split('').map((char, index) => {
        if (char === letter) {
          return letter;
        }
        return guessedWord[index];
      });
      setGuessedWord(updatedWord);
    } else {
      setIncorrectGuesses([...incorrectGuesses, letter]);
      console.log(`This is the wrong letter: ${letter}`);

     

     
    }
  };

  const renderWord = () => {
    return guessedWord.map((letter, index) => (
      <span key={index} className="letter">
        {letter}
      </span>
    ));
  };

  return (
    <>
      <div className="backgr-img">
        <img className="game-background" src={gameBackground} alt="game-background" />
      </div>

      <div className="Game">
        <Man incorrectGuesses={incorrectGuesses} />

        <div className="hint">
          <p className="hint-guessing">ქალაქი</p>
        </div>

        <div className="word">{renderWord()}</div>

        <div className="buttons">
        
          <button className="button-aso" onClick={() => handleGuess('ა')}>
            ა
          </button>
          <button className="button-aso" onClick={() => handleGuess('ბ')}>
            ბ
          </button>
          {/* Add the rest of the alphabet buttons */}
          <button className="button-aso" onClick={() => handleGuess('გ')}>
            გ
          </button>
          <button className="button-aso" onClick={() => handleGuess('დ')}>
            დ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ე')}>
            ე
          </button>
          <button className="button-aso" onClick={() => handleGuess('ვ')}>
            ვ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ზ')}>
            ზ
          </button>
          <button className="button-aso" onClick={() => handleGuess('თ')}>
            თ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ი')}>
            ი
          </button>
          <button className="button-aso" onClick={() => handleGuess('კ')}>
            კ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ლ')}>
            ლ
          </button>
          <button className="button-aso" onClick={() => handleGuess('მ')}>
            მ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ნ')}>
            ნ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ო')}>
            ო
          </button>
          <button className="button-aso" onClick={() => handleGuess('პ')}>
            პ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ჟ')}>
            ჟ
          </button>
          <button className="button-aso" onClick={() => handleGuess('რ')}>
            რ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ს')}>
            ს
          </button>
          <button className="button-aso" onClick={() => handleGuess('ტ')}>
            ტ
          </button>
          <button className="button-aso" onClick={() => handleGuess('უ')}>
            უ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ფ')}>
            ფ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ქ')}>
            ქ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ღ')}>
            ღ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ყ')}>
            ყ
          </button>
          <button className="button-aso" onClick={() => handleGuess('შ')}>
            შ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ჩ')}>
            ჩ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ც')}>
            ც
          </button>
          <button className="button-aso" onClick={() => handleGuess('ძ')}>
            ძ
          </button>
          <button className="button-aso" onClick={() => handleGuess('წ')}>
            წ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ჭ')}>
            ჭ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ხ')}>
            ხ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ჯ')}>
            ჯ
          </button>
          <button className="button-aso" onClick={() => handleGuess('ჰ')}>
            ჰ
          </button>
        </div>

        <div className="change-component">
          <Link to="/chamoxrchobana">
            <button className="button">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Game;
