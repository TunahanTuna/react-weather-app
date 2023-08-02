import React from "react";

function WeatherItem({ weather }) {
  const { icon, tempmax, tempmin } = weather;
  return (
    <div>
      {icon}, {tempmax}, {tempmin}
    </div>
  );
}

export default WeatherItem;
