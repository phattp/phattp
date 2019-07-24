import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchProfile } from "../actions/profile";

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 ${props => props.theme.mSize};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H1 = styled.h1`
  font-size: 5.5rem;
  font-weight: 800;
  line-height: 1;
  margin: 0;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 7rem;
  }
`;

const H2 = styled.h2`
  color: ${props => props.theme.colorDarkGrey};
  font-size: ${props => props.theme.lSize};
  font-weight: 800;
  line-height: 1;
  margin-top: 1rem;
  margin-left: 0.1rem;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: ${props => props.theme.xlSize};
  }
`;

const H3 = styled.h3`
  color: ${props => props.theme.colorLightBlue};
  font-size: ${props => props.theme.mSize};
  font-weight: 700;
  margin-left: 0.3rem;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 2rem;
  }
`;

const P = styled.p`
  font-size: ${props => props.theme.mSize};
  margin-left: 0.3rem;
  margin-bottom: 4rem;
  line-height: 1.5;
  width: 80%;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    width: 60%;
  }
`;

const Button = styled.a`
  align-self: flex-start;
  cursor: pointer;
  border: none;
  border-radius: 4rem;
  font-size: ${props => props.theme.mSize};
  font-weight: 700;
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

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  renderProfile() {
    if (!this.props.profile) {
      return <div>Loading...</div>;
    }

    return this.props.profile.map(me => {
      return (
        <div key={me.id}>
          <H3>{me.title}</H3>
          <H1>
            {me.first_name} {me.last_name}
          </H1>
          <H2>{me.subtitle}</H2>
          <P>{me.description}</P>
        </div>
      );
    });
  }

  render() {
    return (
      <Container id="intro">
        {this.renderProfile()}
        <Button href="mailto:phatthara.pis@gmail.com">Get in Touch</Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { fetchProfile }
)(Profile);
