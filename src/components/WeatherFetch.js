import React, {useState} from 'react';

const WeatherFetch = () => {

  const [responseObj, setResponseObj] = useState({});

  function getWeather() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?lat=0&lon=0&callback=test&id=2172797&lang=null&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=seattle", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "bfcdf8e8cfmsh8992eb209e6217cp122b27jsn6c8dd884a8af"
      }
    })
      .then(response => {
        console.log(response)
        setResponseObj(response)
      })
      .catch(err => {
        console.log(err);
      });
    };

    return (
      <div>
        <h2>Search current weather</h2>
        <div>
          { JSON.stringify(responseObj) }
        </div>
        <button onClick={getWeather}>Get weather</button>
      </div>
    )

  };

  export default WeatherFetch;