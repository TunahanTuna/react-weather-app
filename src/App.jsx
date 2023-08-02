import React, { useContext, useEffect, useState } from "react";

import "./App.css";
import WeatherContainer from "./components/WeatherContainer";
import { CityProvider } from "./context/cityContext";
import { WeatherProvider } from "./context/weatherContext";

function App() {
  return (
    <CityProvider>
      <WeatherProvider>
        <WeatherContainer />
      </WeatherProvider>
    </CityProvider>
  );
}

export default App;
