import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollIntoView from 'scroll-into-view';

import { getHeaderTransparency } from '../../actions';

import styles from './HomePageNavigation.css';

const topOffset = 65;

class HomePageNavigation extends React.Component {
  render() {
    const navigationClass = this.props.transparent ? styles.container : `${styles.container} ${styles.scrolled}`;

    return (
      <nav className={navigationClass}>
        <ul>
          <li className={styles.list}>
            <a
              className={styles.item}
              onClick={() => {
                scrollIntoView(document.getElementById('cover'));
              }}
              role="menuitem"
              tabIndex={0}
            >Home</a>
          </li>

          <li className={styles.list}>
            <a
              className={styles.item}
              onClick={() => {
                scrollIntoView(document.getElementById('about'), {
                  align: { topOffset },
                });
              }}
              role="menuitem"
              tabIndex={0}
            >About</a>
          </li>

          <li className={styles.list}>
            <a
              className={styles.item}
              onClick={() => {
                scrollIntoView(document.getElementById('work'), {
                  align: { topOffset },
                });
              }}
              role="menuitem"
              tabIndex={0}
            >Work</a>
          </li>

          <li className={styles.list}>
            <a
              className={styles.item}
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

HomePageNavigation.propTypes = {
  transparent: PropTypes.bool.isRequired,
};

const mapStateToProps = state => getHeaderTransparency(state.header.transparent);

export default connect(mapStateToProps)(HomePageNavigation);
