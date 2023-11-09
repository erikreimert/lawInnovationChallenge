import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/weather')
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  return (
    <div>
      {weatherData && (
        <div>
          {weatherData.map((day, index) => (
            <div key={index}>
              <div>date: {new Date(day.dt * 1000).toLocaleDateString()}</div>
              <div>temp: {Math.round(day.temp.day - 273.15)}°C</div>
              <div>min: {Math.round(day.temp.min - 273.15)}°C</div>
              <div>max: {Math.round(day.temp.max - 273.15)}°C</div>
              <div>humidity: {day.humidity}%</div>
              <div>description: {day.weather[0].description}</div>
              <div>uvi: {day.uvi}</div>
              <div>wind: {day.wind_speed}</div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WeatherComponent;
