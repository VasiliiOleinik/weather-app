import React, { useState, useEffect } from 'react';
import { useWeather } from './WeatherContext';

import rain from '../sounds/rain.mp3';
// import clear from '../sounds/rain.mp3';
import snow from '../sounds/snow.mp3';
import clouds from '../sounds/clouds.mp3';
// Drizzle

export default function WeatherData() {
  const weather = useWeather();
  const [sound, setSound] = useState(null);

  useEffect(() => {
    switch (weather.main) {
      case 'Clouds': setSound(clouds);
        break;
      case 'Clear': setSound(rain);
        break;
      case 'Snow': setSound(snow);
        break;
      case 'Rain': setSound(rain);
        break;
      // TODO
      // case 'Drizzle': setSound(rain);
      //   break;
      // case 'Mist': setSound(rain);
      // break;
      default: return null;
    }
    return sound;
  }, [weather.main]);

  if (!weather.visible) return null;
  return (
    <div className="card text-center">
      <audio src={sound} autoPlay>
        <track kind="captions" srcLang="en" />
      </audio>
      <div className="card-header">
        <h2>
          <span>Weather in </span>
          <strong className="text-info">{weather.city}</strong>
        </h2>
      </div>
      <div className="card-body">
        <img src={`https://openweathermap.org/img/wn/${weather.iconID}@2x.png`} alt={weather.main} />
        <p>
          <span className="card-title">
            <strong>Main: </strong>
          </span>
          <span className="card-text text-warning">{weather.main}</span>
        </p>
        <p>
          <span className="card-title">
            <strong>Temperature: </strong>
          </span>
          <span className="card-text text-warning">{weather.mainTemp}</span>
        </p>
        <p>
          <span className="card-title">
            <strong>Feels Like: </strong>
          </span>
          <span className="card-text text-warning">{weather.feelsLike}</span>
        </p>
        <p>
          <span className="card-title">
            <strong>Description: </strong>
          </span>
          <span className="card-text text-warning">{weather.description}</span>
        </p>
      </div>
    </div>
  );
}
