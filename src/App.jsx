import React, { useState } from 'react';
import './main.css';

const App = () => {
    const [playerName, setPlayerName] = useState('Player 1');
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [message, setMessage] = useState('');
    const [rolling, setRolling] = useState(false);

    const rollDice = () => {
        setRolling(true);
        setTimeout(() => {
            const playerRoll = Math.ceil(Math.random() * 6);
            const computerRoll = Math.ceil(Math.random() * 6);
            setDice1(playerRoll);
            setDice2(computerRoll);
            setRolling(false);

            if (playerRoll > computerRoll) {
                setPlayerScore(prev => prev + 1);
                setMessage(`${playerName} Wins!`);
            } else if (playerRoll < computerRoll) {
                setComputerScore(prev => prev + 1);
                setMessage('Computer Wins!');
            } else {
                setMessage('It’s a Tie!');
            }
        }, 1500); // 1.5 second delay for dice rolling animation
    };

    return (
        <div className="container">
            <h1>🎲 Dice Game</h1>
            <div className="dice-row">
                <div className="dice">
                    <img src={`/images/dice${dice1}.png`} alt={`Player's dice`} />
                </div>
                <div className="dice">
                    <img src={`/images/dice${dice2}.png`} alt={`Computer's dice`} />
                </div>
            </div>
            <p className="result">{message}</p>
            <div className="input-container">
                <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Enter Player's Name"
                />
            </div>
            <button onClick={rollDice} disabled={rolling}>
                {rolling ? 'Rolling...' : 'Roll the Dice'}
            </button>
            <div className="score-board">
                <p>{playerName}: {playerScore}</p>
                <p>Computer: {computerScore}</p>
            </div>
        </div>
    );
};

export default App;