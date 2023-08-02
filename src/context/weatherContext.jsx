import { createContext, useEffect, useState } from "react";
import { fetchWeathers } from "../core/fetchData";
import axios from "axios";

export const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weathers, setWeathers] = useState();
  useEffect(() => {
    const deneme = async () => {
      const weathersData = await fetchWeathers();
      setWeathers(weathersData);
    };
    deneme();
  }, []);
  const values = {
    weathers,
    setWeathers,
  };
  return (
    <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
  );
};
