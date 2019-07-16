import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "styled-components";
import "tachyons/css/tachyons.css";

require("dotenv").config();

const theme = {
  // COLOR VARIABLES
  colorBlue1: "#0c0032",
  colorBlue2: "#190061",
  colorBlue3: "#240090",
  colorBlue4: "#3500d3",
  colorBlack1: "#282828",
  colorBlack2: "#121212",
  colorGrey1: "#eeeeee",
  colorGrey2: "#8a8a8a",
  colorWhite: "#ffffff"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
