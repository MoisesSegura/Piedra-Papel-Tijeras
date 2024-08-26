import React from 'react';
import rockImg from './images/rock.png'; 
import paperImg from './images/paper.png';
import scissorsImg from './images/scissors.png';

const ChoiceDisplay = ({ playerChoice, computerChoice }) => {
  const getImage = (choice) => {
    switch (choice) {
      case 'piedra':
        return rockImg;
      case 'papel':
        return paperImg;
      case 'tijeras':
        return scissorsImg;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <div style={{ marginRight: '20px' }}>
        <h3>Yo</h3>
        {playerChoice && <img src={getImage(playerChoice)} alt={playerChoice} style={{ width: '100px' }} />}
      </div>
      <div>
        <h3>VS</h3>
      </div>
      <div style={{ marginLeft: '20px' }}>
        <h3>Computadora</h3>
        {computerChoice && <img src={getImage(computerChoice)} alt={computerChoice} style={{ width: '100px', transform: 'scaleX(-1)'  }} />}
      </div>
    </div>
  );
};

export default ChoiceDisplay;
