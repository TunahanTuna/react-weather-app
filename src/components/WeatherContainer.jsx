import React, { useContext, useEffect } from "react";
import { weatherContext } from "../context/weatherContext";
import WeatherItem from "./WeatherItem";
import { conditions } from "../icons";
function WeatherContainer() {
  const { weathers, setWeathers } = useContext(weatherContext);

  return (
    <div>
      <div>
        <h1>7 GÜNLÜK HAVA DURUMU</h1>
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
