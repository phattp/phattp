import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchProfile } from "../actions/profile";

const Container = styled.div.attrs({
  id: "intro",
  className: "flex flex-column justify-center vh-100 w-80 pb5"
})``;

const H1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1;
  margin: 0;
`;

const H2 = styled.h2`
  color: ${props => props.theme.colorGrey2};
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  margin-top: 1rem;
  margin-left: 0.1rem;
`;

const H3 = styled.h3`
  color: ${props => props.theme.colorBlue4}
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 0.3rem;
`;

const P = styled.p`
  font-size: 1.1rem;
  margin-left: 0.3rem;
  margin-bottom: 3rem;
  line-height: 1.5;
  width: 60%;
`;

const Button = styled.button`
  align-self: flex-start;
  border: none;
  border-radius: 4rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 1.5rem;
  cursor: pointer;
  background-color: ${props => props.theme.colorBlue4};
  color: ${props => props.theme.colorGrey1};
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;

  :hover,
  :focus {
    background-color: ${props => props.theme.colorBlue3};
  }

  :focus {
    outline: none;
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
      <Container>
        {this.renderProfile()}
        <Button>Get in Touch</Button>
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
