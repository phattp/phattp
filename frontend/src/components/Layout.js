import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
