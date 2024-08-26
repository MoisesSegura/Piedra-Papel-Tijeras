import React from 'react';


const Counter = ({userWins, computerWins}) => {
    return(
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h4>Contador:</h4>
        <h3>Victorias del usuario: {userWins}</h3>
        <h3>Victorias de la computadora: {computerWins}</h3>
      </div>
    );
};

export default Counter;