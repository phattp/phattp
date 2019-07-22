import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

import { Provider } from "react-redux";
import store from "../store";

import Layout from "./Layout";
import Profile from "./Profile";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

// Define Global Style
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               ubuntu,
               roboto, noto,
               'segoe ui', arial,
               sans-serif;
    font-size: ${props => props.theme.mSize}
    color: ${props => props.theme.colorBlack}
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Layout>
          <Profile />
          <About />
          <Projects />
          <Contact />
        </Layout>
      </Provider>
    );
  }
}

export default App;
