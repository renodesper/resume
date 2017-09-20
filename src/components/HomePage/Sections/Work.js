import React from 'react';

import './Work.css';

const Work = () => (
  <section className="work" id="work">
    <h3>Work</h3>
    <hr />

    <div className="work__projects">
      <ul className="work__list">
        <li className="work__list__item">
          <img className="work__img" src="http://via.placeholder.com/280x170" alt="Project_01" />
        </li>
        <li className="work__list__item">
          <img className="work__img" src="http://via.placeholder.com/280x170" alt="Project_02" />
        </li>
        <li className="work__list__item">
          <img className="work__img" src="http://via.placeholder.com/280x170" alt="Project_03" />
        </li>
        <li className="work__list__item">
          <img className="work__img" src="http://via.placeholder.com/280x170" alt="Project_04" />
        </li>
        <li className="work__list__item">
          <img className="work__img" src="http://via.placeholder.com/280x170" alt="Project_05" />
        </li>
        <li className="work__list__item">
          <img className="work__img" src="http://via.placeholder.com/280x170" alt="Project_06" />
        </li>
      </ul>
    </div>
  </section>
);
export default Work;
