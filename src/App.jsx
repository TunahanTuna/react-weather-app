import React, { useContext, useEffect, useState } from "react";

import "./App.css";
import { weatherContext } from "./context/weatherContext";
import { CityContext } from "./context/cityContext";

function App() {
  const { weathers, setWeathers } = useContext(weatherContext);
  const { cities } = useContext(CityContext);

  return <div className="App">{JSON.stringify(cities)}</div>;
}

export default App;
