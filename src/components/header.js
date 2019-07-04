import React, { Component } from 'react';

import LazyHero from 'react-lazy-hero';

import banner from '../assets/aj-banner.png';
import hero from '../assets/hero.jpg';

class Header extends Component {

  render() {
    return (
      <div className='header'>
        <LazyHero
          color='#000'
          imageSrc={hero}
          minHeight='100vh'
          opacity={0.6}
          transitionDuration={1000}
        >
          <div className='hero-content'>
            <img className='banner' alt='Andrew Jenkins Banner' src={banner} />
            <span className='sub-text'>Software Engineer & Designer</span>
          </div>
        </LazyHero>
      </div>
    );
  }
}

export default Header;
