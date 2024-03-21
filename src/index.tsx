import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "./index.css";
import "react-responsive-modal/styles.css";
import { WeatherProvider } from "./context/weatherContext";
import { Home } from "./components/Home/Home";
import { theme } from "./theme/theme";

const app = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
app.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <WeatherProvider>
        <Home />
      </WeatherProvider>
    </ThemeProvider>
  </React.StrictMode>
);
