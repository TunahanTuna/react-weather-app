import React, { useContext } from "react";
import { CityContext } from "../context/cityContext";

function DaySelector() {
  const { cities } = useContext(CityContext);
  console.log(cities);
  return <div>DaySelector</div>;
}

export default DaySelector;
