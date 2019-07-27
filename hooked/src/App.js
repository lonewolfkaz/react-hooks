import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userText, setUserText] = useState("");

  function handleUserKeyPress(event) {
    const { key, keyCode } = event;
    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90));
    setUserText(`${userText} ${key}`)
  }

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    }
  })

  return (
    <div className={"App"}>
      <h1>Geronimo!</h1>
      <blockquote>{userText}</blockquote>
    </div>

  );
}


export default App;
