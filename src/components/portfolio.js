import React, { Component } from 'react';

import PortfolioCard from './portfolio-card';

import ionaRacing from '../assets/image/iona-racing.jpg';

class Portfolio extends Component {

  render() {
    return (
      <div className='portfolio segment'>
        <PortfolioCard date='06/06/2017' description='12345' name='Iona Racing' image={ionaRacing} type='Logo' />
      </div>
    );
  }
}

export default Portfolio;
