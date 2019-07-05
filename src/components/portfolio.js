import React, { Component } from 'react';

import PortfolioCard from './portfolio-card';

import portfolioItems from '../assets/json/portfolio-items.json';

class Portfolio extends Component {

  renderCards() {
    if (!(portfolioItems instanceof Array)) {
      throw new Error('Portfolio items cannot be rendered.');
    }

    return portfolioItems.map(item =>
      <PortfolioCard
        key={item.name}
        date={item.date}
        description={item.description}
        name={item.name}
        image={require(`../assets/image/${item.image}`)}
        type={item.type}
      />
    );
  }

  render() {
    return (
      <div className='portfolio segment'>
        <h1>Portfolio</h1>
        <div className='cards'>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default Portfolio;
