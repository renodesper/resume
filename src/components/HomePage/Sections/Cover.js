import React from 'react';
import scrollIntoView from 'scroll-into-view';

import './Cover.css';
import Arrow from '../../../images/arrow.png';

const topOffset = 65;

const Cover = () => (
  <section className="cover" id="cover">
    <h1 className="cover__title">Simplex</h1>
    <h2 className="cover__subtitle">Designer &amp; Developer</h2>

    <img
      className="cover__arrow"
      src={Arrow}
      alt="Arrow"
      onClick={() => {
        scrollIntoView(document.getElementById('about'), {
          align: { topOffset },
        });
      }}
    />
  </section>
);
export default Cover;
