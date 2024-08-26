import React, { useState } from 'react';
import ChoiceDisplay from './ChoiceDisplay'; 
import Counter from './Counter';

const choices = ["piedra", "papel", "tijeras"];

const getRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "Es un empate!";
  } else if (
    (playerChoice === "piedra" && computerChoice === "tijeras") ||
    (playerChoice === "tijeras" && computerChoice === "papel") ||
    (playerChoice === "papel" && computerChoice === "piedra")
  ) {
    return "Ganaste!";
  } else {
    return "Perdiste!";
  }
};

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [userWins, setUserWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  const handlePlayerChoice = (choice) => {
    const computerChoice = getRandomChoice();
    const result = determineWinner(choice, computerChoice);
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(result);

    if (result === "Ganaste!") {
      setUserWins(userWins + 1);
    } else if (result === "Perdiste!") {
      setComputerWins(computerWins + 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Piedra Papel Tijeras</h1>
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div>
          <ChoiceDisplay playerChoice={playerChoice} computerChoice={computerChoice} />
          <h2>{result}</h2>
        </div>
      )}
       <Counter userWins={userWins} computerWins={computerWins} />
    </div>
  );
};

export default RockPaperScissors;
