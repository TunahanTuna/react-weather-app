import { createContext, useEffect, useState } from "react";
import { fetchCities } from "../core/fetchData";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCities();
      setCities(response.map((c) => c.name));
    };
    fetchData();
  }, []);

  const values = { cities };
  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};
