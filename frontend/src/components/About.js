import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchProfile } from "../actions/profile";

const BG = styled.div`
  background-color: ${props => props.theme.colorGrey};
`;

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 10rem ${props => props.theme.mSize};
`;

const H4 = styled.h4`
  font-size: ${props => props.theme.lSize};
  font-weight: 700;
  color: desktopBreakpoint;
  margin: 0;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-right: 8rem;
    max-width: 70rem;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`;

const Img = styled.img`
  max-width: 32rem;
  height: auto;
  border-radius: 0.5rem;
`;

class About extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  renderSkills(skills) {
    return (
      <ul>
        {skills.split(",").map(skill => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    );
  }

  renderProfile() {
    if (!this.props.profile) {
      return <div>Loading...</div>;
    }

    return this.props.profile.map(me => {
      return (
        <div key={me.id}>
          <FlexDiv>
            <div>
              <p>{me.about}</p>
              {this.renderSkills(me.skills)}
            </div>
            <Img src={me.photo} alt={me.fist_name} />
          </FlexDiv>
        </div>
      );
    });
  }

  render() {
    return (
      <BG id="about">
        <Container>
          <H4>About Me</H4>
          {this.renderProfile()}
        </Container>
      </BG>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { fetchProfile }
)(About);
