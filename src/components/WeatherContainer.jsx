import React, { useContext, useEffect } from "react";
import { weatherContext } from "../context/weatherContext";
import WeatherItem from "./WeatherItem";
import { conditions } from "../icons";
function WeatherContainer() {
  const { weathers, setWeathers } = useContext(weatherContext);
  const test = "thunder";
  const deneme = conditions.find((condition) => condition.name === test);
  console.log(deneme);
  console.log(conditions);
  return (
    <div>
      <div>
        <h1>7 GÜNLÜK HAVA DURUMU</h1>
      </div>
      {deneme && React.createElement(deneme.item)}
      <div>
        {weathers.map((w) => (
          <WeatherItem weather={w} />
        ))}
      </div>
    </div>
  );
}

export default WeatherContainer;
