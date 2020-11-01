import React, { useContext, useReducer } from 'react';

const WeatherContext = React.createContext();

export const useWeather = () => {
  return useContext(WeatherContext);
}

const SHOW_WEATHER = 'show';

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_WEATHER: return {
      ...state,
      visible: true,
      city: action.city,
      feelsLike: action.feelsLike,
      mainTemp: action.mainTemp,
      description: action.description,
      main: action.main,
      iconID: action.iconID,
    };
    default: return state;
  }
}

export const WeatherProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    city: '',
    feelsLike: '',
    mainTemp: '', // Температура
    description: '', // Опсиание
    main: '',
    iconID: '',
  });

  const show = (city, feelsLike, mainTemp, description, main, iconID) => dispatch({
    type: SHOW_WEATHER,
    feelsLike, mainTemp, description, main,
    city,iconID
  });

  return (
    <WeatherContext.Provider value={{
      visible: state.visible,
      city: state.city,
      feelsLike: state.feelsLike,
      mainTemp: state.mainTemp,
      description: state.description,
      main: state.main,
      iconID: state.iconID,
      show
    }}>
      { children}
    </WeatherContext.Provider>
  )

}