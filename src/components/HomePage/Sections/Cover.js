import React from 'react';
import styled from 'styled-components';
import scrollIntoView from 'scroll-into-view';

import CoverImage from '../../../images/cover.jpg';
import PfeilImage from '../../../images/pfeil.png';

const Container = styled.section`
  background: url(${CoverImage});
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  padding-top: 200px;
  min-height: calc(100% - 200px);
`;

const H1 = styled.h1`
  margin: 0 auto 0 auto;
  font-size: 110px;
`;

const H2 = styled.h2`
  margin: 0 auto 0 auto;
  font-size: 25px;
`;

const Pfeil = styled.img`
  width: 32px;
  margin-top: 150px;

  opacity: 0.7;
  transition: all 200ms;
  &:hover {
    opacity: 1;
    transition: all 200ms;
  }
`;

const topOffset = 65;

const Cover = () => (
  <Container id="cover">
    <H1>Simplex</H1>
    <H2>Software Engineer</H2>
    <Pfeil
      src={PfeilImage}
      alt="Pfeil"
      onClick={() => {
        scrollIntoView(document.getElementById('about'), {
          align: { topOffset },
        });
      }}
    />
  </Container>
);
export default Cover;
