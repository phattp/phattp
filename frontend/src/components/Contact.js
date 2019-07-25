import React from "react";
import styled from "styled-components";

const BG = styled.div`
  background-color: white;
`;

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 ${props => props.theme.mSize};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const H4 = styled.h4`
  font-size: ${props => props.theme.xlSize};
  font-weight: 700;
  color: ${props => props.theme.colorBlue};
  margin: 0;
  margin-bottom: 3rem;
`;

const H6 = styled.h6`
  font-family: "Roboto Mono", monospace;
  font-size: ${props => props.theme.mSize};
  font-weight: 400;
  color: ${props => props.theme.colorBlue};
  margin-bottom: 2rem;
`;

const P = styled.p`
  line-height: 1.5;
  white-space: pre-line;
  margin: 0;
  margin-bottom: 5rem;
  max-width: 60rem;
  align-self: center;
`;

const Button = styled.a`
  align-self: center;
  cursor: pointer;
  border: none;
  border-radius: 4rem;
  font-family: "Roboto Mono", monospace;
  font-size: ${props => props.theme.mSize};
  padding: 1.5rem 2rem;
  background-color: ${props => props.theme.colorBlue};
  color: ${props => props.theme.colorWhite};
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;

  :link,
  :visited {
    text-decoration: none;
  }

  :hover,
  :active {
    background-color: ${props => props.theme.colorDarkBlue};
  }

  :active {
    transform: scale(0.99);
  }
`;

const Contact = () => {
  return (
    <BG id="contact">
      <Container>
        <H6>Want to work with me?</H6>
        <H4>Get In Touch</H4>
        <P>
          Although I'm not currently looking for freelance opportunities, my
          inbox is always open. Whether for a potential project or just to say
          hi, I'll try my best to answer your email!
        </P>
        <Button href="mailto:phatthara.pis@gmail.com">Say Hello</Button>
      </Container>
    </BG>
  );
};

export default Contact;
