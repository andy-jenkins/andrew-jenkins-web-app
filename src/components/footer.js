import React, { Component } from 'react';

import logo from '../assets/image/aj-banner.png';

class Footer extends Component {

  render() {
    return (
      <div className='footer'>
        <img className='logo' alt='Logo' src={logo} />
        <div className='copyright'>
          &copy; 2020 Andrew Jenkins. All Rights Reserved.
        </div>
      </div>
    );
  }
}

export default Footer;
