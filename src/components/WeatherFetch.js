import React, { useState, useEffect, useRef } from 'react';
import { useWeather } from './WeatherContext';

export default function WeatherFetch() {
  const weather = useWeather();
  const inputRef = useRef(null);
  const renderCount = useRef(1);
  const [weatherError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    renderCount.current += 1;
  });

  function getWeather() {
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'bfcdf8e8cfmsh8992eb209e6217cp122b27jsn6c8dd884a8af',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        switch (data.cod) {
          case '404': setError(true); setErrorMsg(data.message);
            break;
          case '400': setError(true); setErrorMsg(data.message);
            break;
          case '200': setError(false);
            break;
          default: setError(false);
        }
        return (weather.show(data.name, data.main.feels_like, data.main.temp,
          data.weather[0].description, data.weather[0].main, data.weather[0].icon)
        );
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  }

  return (
    <div className="container mt-3 mb-3">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Type your city" ref={inputRef} onChange={(e) => setCity(e.target.value)} value={city} />
        <div className="input-group-append">
          <button className="btn btn-success" onClick={getWeather} type="button">Get weather</button>
        </div>
      </div>
      <div className={`alert alert-danger mt-3 ${weatherError ? 'd-block' : 'd-none'}`}>{errorMsg}</div>
    </div>
  );
}
