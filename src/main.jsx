import React, { useState } from 'react';
import './main.css';

const Main = () => {
  const [playerDice, setPlayerDice] = useState(1);
  const [computerDice, setComputerDice] = useState(1);
  const [message, setMessage] = useState('');

  const rollDice = () => {
    const newPlayer = Math.ceil(Math.random() * 6);
    const newComputer = Math.ceil(Math.random() * 6);
    setPlayerDice(newPlayer);
    setComputerDice(newComputer);

    if (newPlayer > newComputer) {
      setMessage('🔥 You win!');
    } else if (newPlayer < newComputer) {
      setMessage('💻 Computer wins!');
    } else {
      setMessage('🤝 It’s a tie!');
    }
  };

  return (
    <div className="container">
      <h1>🎲 Dice Game</h1>
      <div className="dice-row">
        <div className="dice">
          <img
            src={`https://www.random.org/dice/dice${playerDice}.png`}
            alt={`Player's dice ${playerDice}`}
          />
        </div>
        <div className="dice">
          <img
            src={`https://www.random.org/dice/dice${computerDice}.png`}
            alt={`Computer's dice ${computerDice}`}
          />
        </div>
      </div>
      <p className="result">{message}</p>
      <button onClick={rollDice}>🎲 Roll the Dice</button>
    </div>
  );
};

export default Main;