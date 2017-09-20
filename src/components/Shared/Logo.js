import React from 'react';
import scrollIntoView from 'scroll-into-view';

import './Logo.css';
import LogoPath from '../../images/logo.png';

class Logo extends React.Component {
  render() {
    const logoClass = this.props.isScrolled ? 'logo logo--scrolled' : 'logo';

    return (
      <div className={logoClass}>
        <img
          className="logo__img"
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
