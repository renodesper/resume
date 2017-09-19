import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 100%;
  background-color: #f0f0f0;
`;

const Projects = styled.div`
  width: 900px;
  margin: 0 auto 0 auto;
`;

const Ul = styled.ul`
  padding: 0;
`;

const List = styled.li`
  width: 33.3%;
  float: left;
  margin-bottom: 15px;
`;

const ProjectImg = styled.img`
  width: 280px;
  height: 170px;
  border-radius: 5px;

  transform: scale(1.0);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.0);
  transition: all 300ms;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    transition: all 300ms;
  }
`;

const Work = () => (
  <Container id="work">
    <h3>Work</h3>
    <hr />

    <Projects>
      <Ul>
        <List>
          <a><ProjectImg src="http://via.placeholder.com/280x170" alt="Project_01" /></a>
        </List>
        <List>
          <a><ProjectImg src="http://via.placeholder.com/280x170" alt="Project_02" /></a>
        </List>
        <List>
          <a><ProjectImg src="http://via.placeholder.com/280x170" alt="Project_03" /></a>
        </List>
        <List>
          <a><ProjectImg src="http://via.placeholder.com/280x170" alt="Project_04" /></a>
        </List>
        <List>
          <a><ProjectImg src="http://via.placeholder.com/280x170" alt="Project_05" /></a>
        </List>
        <List>
          <a><ProjectImg src="http://via.placeholder.com/280x170" alt="Project_06" /></a>
        </List>
      </Ul>
    </Projects>
  </Container>
);
export default Work;
