import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchProfile } from "../actions/profile";

const Container = styled.div.attrs({
  id: "about",
  className: "vh-100"
})``;

const H4 = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.theme.colorGrey};
`;

const FlexDiv = styled.div`
  display: flex;

  p {
    width: 50%;
    margin-right: 5rem;
  }
`;

class About extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  renderSkills(skills) {
    return skills.split(",").map(skill => {
      return <div key={skill}>{skill}</div>;
    });
  }

  renderProfile() {
    if (!this.props.profile) {
      return <div>Loading...</div>;
    }

    return this.props.profile.map(me => {
      return (
        <div key={me.id}>
          <FlexDiv>
            <p>{me.about}</p>
            <img className="w-30" src={me.photo} alt={me.fist_name} />
          </FlexDiv>
          {this.renderSkills(me.skills)}
        </div>
      );
    });
  }

  render() {
    return (
      <Container>
        <H4>About Me</H4>
        {this.renderProfile()}
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
)(About);
