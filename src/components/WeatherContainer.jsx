import React, { useContext, useEffect } from "react";
import { weatherContext } from "../context/weatherContext";
import WeatherItem from "./WeatherItem";
import rain from "../assets/icons/rain.svg";

function WeatherContainer() {
  const { weathers, setWeathers } = useContext(weatherContext);

  return (
    <div>
      <div>
        <h1>7 GÜNLÜK HAVA DURUMU</h1>
      </div>
      +{" "}
      <div>
        {weathers.map((w) => (
          <WeatherItem weather={w} />
        ))}
      </div>
    </div>
  );
}

export default WeatherContainer;
