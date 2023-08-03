import React, { useContext, useEffect } from "react";
import { weatherContext } from "../context/weatherContext";
import WeatherItem from "./WeatherItem";
import { conditions } from "../icons";
import DaySelector from "./DaySelector";
import { CityContext } from "../context/cityContext";
import { fetchWeathers } from "../core/fetchData";
function WeatherContainer() {
  const { weathers, setWeathers } = useContext(weatherContext);
  const { selected } = useContext(CityContext);
  useEffect(() => {
    const deneme = async () => {
      const weathersData = await fetchWeathers(selected);
      setWeathers(weathersData);
    };
    deneme();
    console.log(weathers);
  }, [selected]);
  return (
    <div>
      <div>
        <h1>7 GÜNLÜK HAVA DURUMU</h1>
      </div>
      <div>
        <DaySelector />
      </div>
      <div className="weather-main">
        {weathers.map((w) => (
          <WeatherItem key={w.datetime} weather={w} />
        ))}
      </div>
    </div>
  );
}

export default WeatherContainer;
