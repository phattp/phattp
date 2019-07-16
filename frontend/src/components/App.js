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
  body {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               ubuntu,
               roboto, noto,
               'segoe ui', arial,
               sans-serif;
    color: ${props => props.theme.colorGrey1}
    background-color: ${props => props.theme.colorBlack2}
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
