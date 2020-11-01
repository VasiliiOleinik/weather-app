import React from 'react';
import WeatherFetch from './components/WeatherFetch';
import WeatherData from './components/WeatherData';
import { WeatherProvider } from './components/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="App container">
        <WeatherFetch />
        <WeatherData />
      </div>
    </WeatherProvider>
  );
}

export default App;
