import React from "react";
import styled from "styled-components";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub
} from "react-icons/io";

const BG = styled.div`
  background-color: ${props => props.theme.colorBlue};
`;

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 ${props => props.theme.mSize};
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const H6 = styled.h6`
  color: ${props => props.theme.colorWhite};
  font-size: ${props => props.theme.lSize};
  font-weight: 800;
  letter-spacing: 1.2px;
  margin: 0;
  margin-bottom: ${props => props.theme.mSize};
`;

const P = styled.p`
  color: ${props => props.theme.colorWhite};
  margin: 0;
`;

const SocialUL = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;

  & li {
    margin-right: 2rem;
  }
  & li:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled.a`
  &:visited,
  &:link {
    text-decoration: none;
    border: 0;
    color: ${props => props.theme.colorWhite};
    -webkit-transition: color 0.2s;
    transition: color 0.2s;
  }
  &:hover,
  &:active {
    color: ${props => props.theme.colorLightBlue};
  }
`;

const Footer = () => {
  return (
    <BG>
      <Container>
        <H6>phatt.</H6>
        <P>
          Copyright &copy; 2019 by Phatthara Pisootrapee. All rights reserved.
        </P>
        <SocialUL>
          <li>
            <StyledLink href="/">
              <IoLogoFacebook size={28} />
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/">
              <IoLogoInstagram size={28} />
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/">
              <IoLogoTwitter size={28} />
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/">
              <IoLogoLinkedin size={28} />
            </StyledLink>
          </li>
        </SocialUL>
      </Container>
    </BG>
  );
};

export default Footer;
