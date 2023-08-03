import React, { useContext, useEffect } from "react";
import { weatherContext } from "../context/weatherContext";
import WeatherItem from "./WeatherItem";
import { conditions } from "../icons";
import DaySelector from "./DaySelector";
function WeatherContainer() {
  const { weathers } = useContext(weatherContext);

  return (
    <div>
      <div>
        <h1>7 GÜNLÜK HAVA DURUMU</h1>
      </div>
      <div>
        <DaySelector />
      </div>
      <div className="weather-main">
        {weathers
          .filter((w, index) => index != weathers.length - 1)
          .map((w) => (
            <WeatherItem key={w.datetime} weather={w} />
          ))}
      </div>
    </div>
  );
}

export default WeatherContainer;
