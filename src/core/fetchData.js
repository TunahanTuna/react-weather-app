import axios from "axios";

export const fetchWeathers = async (city, setIsLoading) => {
  const { data } = await axios.get(
    import.meta.env.VITE_WEATHER_API_URL +
      city +
      import.meta.env.VITE_WEATHER_QUERY
  );
  data?.currentConditions
    ? (data.currentConditions.datetime = data?.days?.[0]?.datetime)
    : "00.00.00";
  console.log(data?.currentConditions);
  return (
    (data &&
      data.days &&
      data.currentConditions &&
      data.days.map((w, index) =>
        index === 0 ? data.currentConditions : w
      )) ||
    {}
  );
};
//currentConditions
export const fetchCities = async () => {
  const { data } = await axios.get(import.meta.env.VITE_CITY_API_URL);
  return data && data.data;
};
