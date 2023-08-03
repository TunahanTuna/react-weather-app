import { createContext, useContext, useEffect, useState } from "react";
import { fetchWeathers } from "../core/fetchData";
import axios from "axios";
import { CityContext } from "./cityContext";

export const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weathers, setWeathers] = useState([]);
  const { selected } = useContext(CityContext);
  useEffect(() => {
    const deneme = async () => {
      const weathersData = await fetchWeathers(selected);
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
