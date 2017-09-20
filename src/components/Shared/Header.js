import React from 'react';

import './Header.css';
import Logo from './Logo';
import HomePageNavigation from './HomePageNavigation';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };

    this.isScrolled = this.isScrolled.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.isScrolled);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.isScrolled);
  }

  isScrolled() {
    const { scrolled } = this.state;
    const maxScroll = 80;
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // This code cause flicker:
    // if (currentScroll >= maxScroll) {
    //   if (!scrolled) {
    //     this.setState({ scrolled: true });
    //   } else {
    //     this.setState({ scrolled: false });
    //   }
    // }

    currentScroll >= maxScroll
      ? !scrolled && this.setState({ scrolled: true })
      : scrolled && this.setState({ scrolled: false });
  }

  render() {
    const headerClass = this.state.scrolled ? 'header header--scrolled' : 'header';

    return (
      <header className={headerClass}>
        <Logo isScrolled={this.state.scrolled} />
        <HomePageNavigation isScrolled={this.state.scrolled} />
      </header>
    );
  }
}
export default Header;
