import React from 'react';

import styles from './About.css';
import AvatarImage from '../../../images/avatar.png';

const About = () => (
  <section className={styles.about} id="about">
    <h3>About</h3>
    <hr />

    <img className={styles.avatar} src={AvatarImage} alt="Avatar" />
    <h4 className={styles.name}>Boy Sandy Gladies Arriezona</h4>
    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque tincidunt condimentum elit ac scelerisque. Orci varius natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Proin fermentum est eu libero
      interdum lobortis.
    </p>
  </section>
);
export default About;
