import axios from "axios";

export const fetchWeathers = async (city, setIsLoading) => {
  const { data } = await axios.get(
    import.meta.env.VITE_WEATHER_API_URL +
      city +
      import.meta.env.VITE_WEATHER_QUERY
  );
  console.log(data?.currentConditions);
  return (
    (data &&
      data.days &&
      data.currentConditions &&
      data.days.map((w, index) => {
        if (index === 0) {
          w.icon = data.currentConditions.icon;
          return w;
        }
        return w;
      })) ||
    {}
  );
};
//currentConditions
export const fetchCities = async () => {
  const { data } = await axios.get(import.meta.env.VITE_CITY_API_URL);
  return data && data.data;
};
