import React from 'react';
import styled from 'styled-components';

import Header from '../components/Shared/Header';
import Cover from '../components/HomePage/Sections/Cover';
import About from '../components/HomePage/Sections/About';
import Work from '../components/HomePage/Sections/Work';
import Contact from '../components/HomePage/Sections/Contact';
import Footer from '../components/Shared/Footer';

const Container = styled.div`
  height: 100%;
`;

const HomePage = () => (
  <Container>
    {/* HEADER */}
    <Header />

    {/* SECTIONS */}
    <Cover />
    <About />
    <Work />
    <Contact />

    {/* FOOTER */}
    <Footer />
  </Container>
);
export default HomePage;
