import React, { useContext, useEffect } from "react";
import { CityContext } from "../context/cityContext";
import { fetchWeathers } from "../core/fetchData";
import { weatherContext } from "../context/weatherContext";

function DaySelector() {
  const { cities, selected, setSelected } = useContext(CityContext);
  const onChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="day-seletor--container">
      <select name="city" value={selected} onChange={onChange}>
        {cities.map((city) => (
          <option key={city} value={city.toLowerCase()}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DaySelector;
