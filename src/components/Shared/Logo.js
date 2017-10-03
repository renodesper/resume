import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollIntoView from 'scroll-into-view';

import { getHeaderTransparency } from '../../actions';

import styles from './Logo.css';
import LogoPath from '../../images/logo.png';

class Logo extends React.Component {
  render() {
    const logoClass = this.props.transparent ? styles.container : `${styles.container} ${styles.scrolled}`;

    return (
      <div className={logoClass}>
        <img
          className={styles.img}
          src={LogoPath}
          alt="Logo"
          onClick={() => {
            scrollIntoView(document.getElementById('cover'));
          }}
        />
      </div>
    );
  }
}

Logo.propTypes = {
  transparent: PropTypes.bool.isRequired,
};

const mapStateToProps = state => getHeaderTransparency(state.header.transparent);

export default connect(mapStateToProps)(Logo);
