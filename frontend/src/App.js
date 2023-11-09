import React, { useState, useEffect } from 'react';
import { Frame } from "./index";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/weather')
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  return (
    <div className="App">
      {weatherData && <Frame weatherData={weatherData} />} {/* Pass weatherData as a prop */}
    </div>
  );
}

export default App;
