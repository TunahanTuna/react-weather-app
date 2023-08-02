import React from "react";

function WeatherItem({ weather }) {
  const { tempmax, tempmin } = weather;
  return (
    <div>
      {<img src={require(`../assets/icons/${icon}.svg`)} />}, {tempmax},{" "}
      {tempmin}
    </div>
  );
}

export default WeatherItem;
