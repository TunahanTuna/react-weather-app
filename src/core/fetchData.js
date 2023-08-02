import axios from "axios";

export const fetchWeathers = async () => {
  const { data } = await axios.get(import.meta.env.VITE_WEATHER_API_URL);
  return (data && data.days) || {};
};

export const fetchCities = async () => {
  const { data } = await axios.get(import.meta.env.VITE_CITY_API_URL);
  return data && data.data;
};
