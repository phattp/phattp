import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { TiMediaPlay } from "react-icons/ti";
import { fetchProfile } from "../actions/profile";

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 10rem ${props => props.theme.mSize};
`;

const H4 = styled.h4`
  font-size: ${props => props.theme.lSize};
  font-weight: 700;
  color: ${props => props.theme.colorBlue};
  margin: 0;
  margin-bottom: 4rem;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Div = styled.div`
  margin-right: 5rem;
  max-width: 60rem;
  margin-bottom: 4rem;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    margin-bottom: 0;
  }
`;

const P = styled.p`
  margin: 0;
  line-height: 1.5;
  white-space: pre-line;
`;

const ImgLink = styled.a`
  position: relative;
  width: 32rem;
  height: 32rem;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  clear: float;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 116, 228, 0.7) 35%,
    rgba(116, 219, 239, 0.7) 100%
  );
  border-radius: 1rem;
  transition: 0.5s;

  :hover,
  :active {
    background: linear-gradient(
      90deg,
      rgba(0, 116, 228, 0) 35%,
      rgba(116, 219, 239, 0) 100%
    );
  }
`;

const SkillsDiv = styled.div`
  display: flex;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 3rem;
  margin-right: 5rem;
  margin-bottom: 0;
  font-family: "Roboto Mono", monospace;
  font-size: 1.4rem;

  :last-child {
    margin-right: 0;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const StyledTiMediaPlay = styled(TiMediaPlay)`
  color: ${props => props.theme.colorBlue};
  margin-right: 1rem;
`;

class About extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  renderSkills(skills) {
    const skillsArr = skills.split(",");
    const mid = Math.ceil(skillsArr.length / 2);
    const skills1 = skillsArr.slice(0, mid);
    const skills2 = skillsArr.slice(mid);

    console.log(skillsArr);
    console.log(mid);
    console.log(skills1);
    console.log(skills2);

    return (
      <SkillsDiv>
        <Ul>
          {skills1.map(skill1 => {
            return (
              <Li key={skill1}>
                <StyledTiMediaPlay />
                {skill1}
              </Li>
            );
          })}
        </Ul>

        <Ul>
          {skills2.map(skill2 => {
            return (
              <Li key={skill2}>
                <StyledTiMediaPlay />
                {skill2}
              </Li>
            );
          })}
        </Ul>
      </SkillsDiv>
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
            <Div>
              <P>{me.about}</P>
              {this.renderSkills(me.skills)}
            </Div>
            <ImgLink href="https://github.com/phattp/" target="blank">
              <Img src={me.photo} alt={me.fist_name} />
              <Overlay />
            </ImgLink>
          </FlexDiv>
        </div>
      );
    });
  }

  render() {
    return (
      <Container id="about">
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
