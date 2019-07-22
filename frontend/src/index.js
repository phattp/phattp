import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "styled-components";
import "normalize.css/normalize.css";

require("dotenv").config();

const theme = {
  // COLORS
  colorDarkBlue: "#264e86",
  colorBlue: "#0074e4",
  colorLightBlue: "#74dbef",
  colorGrey: "#eff0f4",
  colorDarkGrey: "#747d8c",
  colorWhite: "#ffffff",
  colorBlack: "#2f3542",

  // SPACING
  sSize: "1.2rem",
  mSize: "1.6rem",
  lSize: "3.2rem",
  xlSize: "4.8rem",
  desktopBreakpoint: "45rem"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
