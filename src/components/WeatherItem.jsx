import React from "react";
import { conditions } from "../icons";
import "../App.css";
function WeatherItem({ weather }) {
  const { icon, tempmax, tempmin } = weather;
  // {deneme && React.createElement(deneme.item)}
  const deneme = conditions.find((condition) => condition.name === icon);

  return (
    <div className="weather-container">
      <div className="weather-icon">
        {deneme && React.createElement(deneme.item)}
      </div>
      <div className="weather-subcontainer">
        <div className="weather-max">{tempmax}</div>
        <div className="weather-min">{tempmin}</div>
      </div>
    </div>
  );
}

export default WeatherItem;
