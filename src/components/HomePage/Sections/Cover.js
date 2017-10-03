import React from 'react';
import scrollIntoView from 'scroll-into-view';

import styles from './Cover.css';
import Arrow from '../../../images/arrow.png';

const topOffset = 65;

const Cover = () => (
  <section className={styles.container} id="cover">
    <h1 className={styles.title}>Simplex</h1>
    <h2 className={styles.subtitle}>Designer &amp; Developer</h2>

    <img
      className={styles.arrow}
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
