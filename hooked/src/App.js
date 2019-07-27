import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")

  const handleCityChange = (event) => setCity(event.target.value);
  const handleCountryChange = (event) => setCountry(event.target.value);

  function handleReset() {
    setCity("");
    setCountry("");
  }

  return (
    <div className="App">
      <form>
        <div>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={handleCityChange}>
          </input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={handleCountryChange}>
          </input>
        </div>
        <div>
          <p>You live in {`${city}, ${country}`}</p>
          <br />
          <button onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default App;
