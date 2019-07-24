import React, { Component } from "react";
import styled from "styled-components";

const BG = styled.div`
  background: ${props => props.theme.colorGrey};
`;

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

const CardContainer = styled.div`
  display: flex;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.colorWhite};
  padding: 2rem;
  width: 30rem;
  height: 35rem;
  margin-right: 2rem;
  border-radius: 0.5rem;
  transition: 0.2s;

  :last-child {
    margin-right: 0;
  }

  :hover {
    transform: translateY(-0.5rem);
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  font-family: "Roboto Mono", monospace;
  font-size: ${props => props.theme.sSize};
`;

const Li = styled.li`
  margin-right: 1rem;

  :last-child {
    margin-right: 0;
  }
`;

export class Projects extends Component {
  render() {
    return (
      <BG id="projects">
        <Container>
          <H4>Something I've Built</H4>
          <CardContainer>
            <Card>
              <Ul>
                <Li>Github</Li>
                <Li>Live Demo</Li>
              </Ul>
              <div>
                <h5>Title</h5>
                <p>
                  Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit..." "There is no
                  one who loves pain itself, who seeks after it and wants to
                  have it, simply because it is pain..."
                </p>
              </div>
              <Ul>
                <Li>React</Li>
                <Li>Node.js</Li>
                <Li>Socket.io</Li>
                <Li>Heroku</Li>
              </Ul>
            </Card>
            <Card>
              <Ul>
                <Li>Github</Li>
                <Li>Live Demo</Li>
              </Ul>
              <div>
                <h5>Title</h5>
                <p>
                  Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit..." "There is no
                  one who loves pain itself, who seeks after it and wants to
                  have it, simply because it is pain..."
                </p>
              </div>
              <Ul>
                <Li>React</Li>
                <Li>Node.js</Li>
                <Li>Socket.io</Li>
                <Li>Heroku</Li>
              </Ul>
            </Card>
            <Card>
              <Ul>
                <Li>Github</Li>
                <Li>Live Demo</Li>
              </Ul>
              <div>
                <h5>Title</h5>
                <p>
                  Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit..." "There is no
                  one who loves pain itself, who seeks after it and wants to
                  have it, simply because it is pain..."
                </p>
              </div>
              <Ul>
                <Li>React</Li>
                <Li>Node.js</Li>
                <Li>Socket.io</Li>
                <Li>Heroku</Li>
              </Ul>
            </Card>
          </CardContainer>
        </Container>
      </BG>
    );
  }
}

export default Projects;
