import React from "react";

const Dice = ({ roll, rolling }) => {
    const diceImages = [
        "/dice1.png",
        "/dice2.png",
        "/dice3.png",
        "/dice4.png",
        "/dice5.png",
        "/dice6.png",
    ];

    const getDiceImage = (roll) => {
        if (roll === null) return diceImages[0]; // default dice
        return diceImages[roll - 1];
    };

    return (
        <div className="dice">
            <img
                src={getDiceImage(rolling ? null : roll)}
                alt="Dice"
                className="dice-img"
            />
        </div>
    );
};

export default Dice;