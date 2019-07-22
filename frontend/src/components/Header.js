import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.colorBlue};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.4rem;
  font-weight: 700;
  max-width: 116rem;
  margin: 0 auto;
  padding: 2rem ${props => props.theme.mSize};
`;

const Brand = styled.a`
  color: ${props => props.theme.colorWhite};
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1.2px;

  :link,
  :visited {
    text-decoration: none;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.colorWhite};
  margin-right: 3rem;

  :link,
  :visited {
    text-decoration: none;
  }
  :hover,
  :active {
    color: ${props => props.theme.colorGrey};
  }
`;

const NavLinkLast = styled.a`
  margin-right: 0;
  border: none;
  border-radius: 4rem;
  padding: 0.8rem 1.8rem;
  background-color: ${props => props.theme.colorWhite};
  color: ${props => props.theme.colorBlue};
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;

  :link,
  :visited {
    text-decoration: none;
  }

  :hover,
  :active {
    background-color: ${props => props.theme.colorGrey};
  }
`;

const Header = () => {
  return (
    <Container>
      <Nav>
        <Brand href="#intro">phatt.</Brand>
        <div>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLinkLast href="#resume">Resume</NavLinkLast>
        </div>
      </Nav>
    </Container>
  );
};

export default Header;
