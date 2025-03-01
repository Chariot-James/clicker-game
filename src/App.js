import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Clicker Game</h1>
      <p>Score: {score}</p>
      <button onClick={() => setScore(score + 1)}>Click Me!</button>
      <button onClick={() => setScore(0)}>Reset Score</button>
    </div>
  );
}

export default App;
