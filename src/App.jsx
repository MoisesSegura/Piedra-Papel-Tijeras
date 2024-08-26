import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import RockPaperScissors from './RockPaperScissors';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RockPaperScissors />
    </div>
  )
}

export default App
