import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Container = styled.div`
  background-color: ${props => props.theme.colorBlue};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  font-size: 1.4rem;
  font-weight: 700;
  max-width: 116rem;
  margin: 0 auto;
  padding: 2rem ${props => props.theme.mSize};

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavBrand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandLink = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.colorWhite};
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1.2px;

  :link,
  :visited {
    text-decoration: none;
  }
`;

const CollapseButton = styled.button`
  padding: 0;
  margin: 0;
  line-height: 0;
  border: none;
  background-color: ${props => props.theme.colorBlue};
  color: ${props => props.theme.colorWhite};
  outline: none;
  font-size: 2rem;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;

  :link,
  :visited {
    text-decoration: none;
  }

  :hover,
  :active {
    color: ${props => props.theme.colorGrey};
  }

  :active {
    transform: scale(0.95);
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    display: none;
  }
`;

const NavLinkWrapper = styled.div`
  display: none;
  flex-direction: column;
  align-items: start;
  font-family: "Roboto Mono", monospace;
  font-weight: 400;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  margin-bottom: 2rem;
  color: ${props => props.theme.colorWhite};

  :link,
  :visited {
    text-decoration: none;
  }
  :hover,
  :active {
    color: ${props => props.theme.colorGrey};
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    margin: 0;
    margin-right: 3rem;
  }
`;

const NavLinkLast = styled.a`
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

const handleCollapse = () => {
  let navLinks = document.querySelector(NavLinkWrapper);

  if (window.innerWidth < 450 || navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else if (window.innerWidth < 450 || navLinks.style.display === "none") {
    navLinks.style.display = "flex";
  } else if (window.innerWidth > 450 || navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else if (window.innerWidth > 450 || navLinks.style.display === "none") {
    navLinks.style.display = "flex";
  }
};

const Header = () => {
  return (
    <Container>
      <Nav>
        <NavBrand>
          <BrandLink
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            duration={500}
          >
            phatt.
          </BrandLink>
          <CollapseButton onClick={handleCollapse}>
            <FaBars />
          </CollapseButton>
        </NavBrand>
        <NavLinkWrapper>
          <NavLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </NavLink>
          <NavLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </NavLink>
          <NavLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </NavLink>
          <NavLinkLast href="#resume">Resume</NavLinkLast>
        </NavLinkWrapper>
      </Nav>
    </Container>
  );
};

export default Header;
