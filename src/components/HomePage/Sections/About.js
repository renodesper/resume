import React from 'react';
import styled from 'styled-components';

import AvatarImage from '../../../images/avatar.png';

const Container = styled.section`
  min-height: 100%;
`;

const Avatar = styled.img`
  width: 200px;

  transform: scale(1.0);
  transition: all 300ms;
  &:hover {
    transform: scale(1.1);
    transition: all 300ms;
  }
`;

const H4 = styled.h4`
  font-size: 25px;
`;

const P = styled.p`
  width: 700px;
  margin: 0 auto 0 auto;
`;

const About = () => (
  <Container id="about">
    <h3>About</h3>
    <hr />

    <Avatar src={AvatarImage} alt="Avatar"/>
    <H4>Boy Sandy Gladies Arriezona</H4>
    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt condimentum
      elit ac scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Proin fermentum est eu libero interdum lobortis.
    </P>
  </Container>
);
export default About;
