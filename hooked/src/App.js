import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prevCount) => {
    return prevCount + 1;
  });

  return (
    <div className="App">
      <button onClick={handleClick}>Increase</button>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
