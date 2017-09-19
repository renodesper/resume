import React from 'react';
import scrollIntoView from 'scroll-into-view';

import './Logo.css';
import LogoPath from '../../images/logo.png';

class Logo extends React.Component {
  render() {
    const logoClass = this.props.isScrolled ? 'LogoContainer Scrolled' : 'LogoContainer';

    return (
      <div className={logoClass}>
        <img
          className="LogoImage"
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

export default Logo;
