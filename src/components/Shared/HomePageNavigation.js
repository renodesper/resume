import React from 'react';
import scrollIntoView from 'scroll-into-view';

import './HomePageNavigation.css';

const topOffset = 65;

class HomePageNavigation extends React.Component {
  render() {
    const navigationClass = this.props.isScrolled ? 'navigation navigation--scrolled' : 'navigation';

    return (
      <nav className={navigationClass}>
        <ul>
          <li className="navigation__list">
            <a
              className="navigation__list__item"
              onClick={() => {
                scrollIntoView(document.getElementById('cover'));
              }}
              role="menuitem"
              tabIndex={0}
            >Home</a>
          </li>

          <li className="navigation__list">
            <a
              className="navigation__list__item"
              onClick={() => {
                scrollIntoView(document.getElementById('about'), {
                  align: { topOffset },
                });
              }}
              role="menuitem"
              tabIndex={0}
            >About</a>
          </li>

          <li className="navigation__list">
            <a
              className="navigation__list__item"
              onClick={() => {
                scrollIntoView(document.getElementById('work'), {
                  align: { topOffset },
                });
              }}
              role="menuitem"
              tabIndex={0}
            >Work</a>
          </li>

          <li className="navigation__list">
            <a
              className="navigation__list__item"
              onClick={() => {
                scrollIntoView(document.getElementById('contact'), {
                  align: { topOffset },
                });
              }}
              role="menuitem"
              tabIndex={0}
            >Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HomePageNavigation;
