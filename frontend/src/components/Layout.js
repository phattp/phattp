import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div.attrs({
  className: "pl5 pr5"
})``;

const Layout = props => {
  return (
    <div>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
