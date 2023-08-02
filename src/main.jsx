import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WeatherProvider } from "./context/weatherContext.jsx";
import { CityProvider } from "./context/cityContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CityProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </CityProvider>
  </React.StrictMode>
);
