import axios from "axios";

export const fetchWeathers = async (city, setIsLoading) => {
  const { data } = await axios.get(
    import.meta.env.VITE_WEATHER_API_URL +
      city +
      import.meta.env.VITE_WEATHER_QUERY
  );
  return (data && data.days) || {};
};

export const fetchCities = async () => {
  const { data } = await axios.get(import.meta.env.VITE_CITY_API_URL);
  return data && data.data;
};
