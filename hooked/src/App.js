import React, { useState } from 'react';
import './App.css';

function useInput() {
  const [value, setValue] = useState("")

  function onChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange
  }

}

function App() {
  return (
    <div className={"App"}>
      <form>
        <input
          type="text"
          placeholder="Name"
          {...useInput()}
        />
        <input
          type="text"
          placeholder="Surname"
          {...useInput()}
        />
        <input
          type="number"
          placeholder="Age"
          {...useInput()}
        />

      </form>
    </div>

  );
}


export default App;
