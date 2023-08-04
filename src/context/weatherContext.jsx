import { createContext, useContext, useEffect, useState } from "react";
import { fetchWeathers } from "../core/fetchData";
import axios from "axios";
import { CityContext } from "./cityContext";

export const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weathers, setWeathers] = useState([]);
  const { selected } = useContext(CityContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const deneme = async () => {
      setIsLoading(true);
      const weathersData = await fetchWeathers(selected);
      setWeathers(weathersData);
      setIsLoading(false);
    };
    deneme();
  }, []);

  const values = {
    weathers,
    setWeathers,
    isLoading,
    setIsLoading,
  };
  return (
    <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
  );
};
