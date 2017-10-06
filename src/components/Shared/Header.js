import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  setHeaderTransparency,
  getHeaderTransparency } from '../../actions';

import styles from './Header.css';
import Logo from './Logo';
import HomePageNavigation from './HomePageNavigation';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.isTransparent = this.isTransparent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.isTransparent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.isTransparent);
  }

  isTransparent() {
    const maxScroll = 20;
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const status = currentScroll >= maxScroll
      ? this.props.dispatch(setHeaderTransparency(false))
      : this.props.dispatch(setHeaderTransparency(true));

    return status;
  }

  render() {
    const headerClass = this.props.transparent ? styles.container : `${styles.container} ${styles.scrolled}`;

    return (
      <header className={headerClass}>
        <Logo />
        <HomePageNavigation />
      </header>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  transparent: PropTypes.bool.isRequired,
};

const mapStateToProps = state => getHeaderTransparency(state.header.transparent);

export default connect(mapStateToProps)(Header);
