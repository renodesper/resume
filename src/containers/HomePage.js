import React from 'react';

import styles from './HomePage.css';

import Header from '../components/Shared/Header';
import Cover from '../components/HomePage/Sections/Cover';
import About from '../components/HomePage/Sections/About';
import Work from '../components/HomePage/Sections/Work';
import Contact from '../components/HomePage/Sections/Contact';
import Footer from '../components/Shared/Footer';

const HomePage = () => (
  <div className={styles.homepage}>
    {/* HEADER */}
    <Header />

    {/* SECTIONS */}
    <Cover />
    <About />
    <Work />
    <Contact />

    {/* FOOTER */}
    <Footer />
  </div>
);
export default HomePage;
