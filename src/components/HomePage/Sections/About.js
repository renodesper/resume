import React from 'react';

import './About.css';
import AvatarImage from '../../../images/avatar.png';

const About = () => (
  <section className="about" id="about">
    <h3>About</h3>
    <hr />

    <img className="about__avatar" src={AvatarImage} alt="Avatar" />
    <h4 className="about__name">Boy Sandy Gladies Arriezona</h4>
    <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque tincidunt condimentum elit ac scelerisque. Orci varius natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Proin fermentum est eu libero
      interdum lobortis.
    </p>
  </section>
);
export default About;
