import React from "react";
import { createRoot } from 'react-dom/client';
import "./style.css";
import App from "./App";

export const Frame = ({ weatherData }) => {
  const today = weatherData[0]; // Assuming the first element corresponds to today's data
  return (
    <div className="frame">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="div" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="day" />
          <div className="day-2" />
          <div className="day-3" />
          <div className="day-4" />
          <div className="day-5" />
          <div className="text-wrapper">Days</div>
          <div className="humidity">humidity: {today.humidity}%</div>
          <div className="wind-speed">wind speed: {today.wind_speed} m/s</div>
          <div className="uvi">uvi: {today.uvi}</div>
          <div className="max">max: {Math.round(today.temp.max -  273.15)}°C</div>
          <div className="min">min: {Math.round(today.temp.min -  273.15)}°C</div>
          <div className="description">{today.weather[0].description}</div>
          <div className="text-wrapper-2">{Math.round(today.temp.day - 273.15)}°C</div>
          <div className="text-wrapper-3">Berlin, DE</div>
          <div className="text-wrapper-4">{Math.round(weatherData[1].temp.max -  273.15)}°C</div>
          <div className="text-wrapper-5">{new Date(weatherData[1].dt * 1000).toLocaleString('en-US', { weekday: 'long' })}</div>
          <div className="text-wrapper-6">{Math.round(weatherData[1].temp.min -  273.15)}°C</div>
          <div className="text-wrapper-7">{Math.round(weatherData[2].temp.max -  273.15)}°C</div>
          <div className="text-wrapper-8">{new Date(weatherData[2].dt * 1000).toLocaleString('en-US', { weekday: 'long' })}</div>
          <div className="text-wrapper-9">{Math.round(weatherData[2].temp.min -  273.15)}°C</div>
          <div className="text-wrapper-10">{Math.round(weatherData[3].temp.max -  273.15)}°C</div>
          <div className="text-wrapper-11">{new Date(weatherData[3].dt * 1000).toLocaleString('en-US', { weekday: 'long' })}</div>
          <div className="text-wrapper-12">{Math.round(weatherData[3].temp.min -  273.15)}°C</div>
          <div className="text-wrapper-13">{Math.round(weatherData[4].temp.max -  273.15)}°C</div>
          <div className="text-wrapper-14">{new Date(weatherData[4].dt * 1000).toLocaleString('en-US', { weekday: 'long' })}</div>
          <div className="text-wrapper-15">{Math.round(weatherData[4].temp.min -  273.15)}°C</div>
          <div className="text-wrapper-16">{Math.round(weatherData[5].temp.max -  273.15)}°C</div>
          <div className="text-wrapper-17">{new Date(weatherData[5].dt * 1000).toLocaleString('en-US', { weekday: 'long' })}</div>
          <div className="text-wrapper-18">{Math.round(weatherData[5].temp.min -  273.15)}°C</div>
        </div>
      </div>
    </div>
  );
};

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);