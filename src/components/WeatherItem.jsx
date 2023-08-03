import React from "react";
import { conditions } from "../icons";
import "../App.css";
import moment from "moment/moment";
function WeatherItem({ weather }) {
  const { icon, tempmax, tempmin, datetime } = weather;
  // {deneme && React.createElement(deneme.item)}
  const day = moment(datetime).format("LLLL").split(",")[0];
  const weekofDay = moment(datetime).calendar().split(" ")[0];
  const icons = conditions.find((condition) => condition.name === icon);
  return (
    <div
      className={`weather-container ${
        weekofDay.toLowerCase() === "today" ? "today" : ""
      }`}
    >
      <div className="weather-day">{day}</div>
      <div className="weather-icon">
        {icons && React.createElement(icons.item)}
      </div>
      <div className="weather-subcontainer">
        <div className="weather-max">Max: {tempmax}</div>
        <div className="weather-min">Min: {tempmin}</div>
      </div>
    </div>
  );
}

export default WeatherItem;
