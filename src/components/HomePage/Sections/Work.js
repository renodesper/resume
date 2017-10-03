import React from 'react';

import styles from './Work.css';

const Work = () => (
  <section className={styles.container} id="work">
    <h3>Work</h3>
    <hr />

    <div className={styles.projects}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img className={styles.img} src="http://via.placeholder.com/280x170" alt="Project_01" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src="http://via.placeholder.com/280x170" alt="Project_02" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src="http://via.placeholder.com/280x170" alt="Project_03" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src="http://via.placeholder.com/280x170" alt="Project_04" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src="http://via.placeholder.com/280x170" alt="Project_05" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src="http://via.placeholder.com/280x170" alt="Project_06" />
        </li>
      </ul>
    </div>
  </section>
);
export default Work;
