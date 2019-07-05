import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

class PortfolioCard extends Component {

  render() {
    const { date, description, image, name, type } = this.props;

    return (
      <div className='portfolio-card'>
        <div className='image'>
          <img alt={name} src={image} />
        </div>
        <div className='content'>
          <div className='title'>{name}</div>
          <div className='sub-title'>{type}</div>
          <div className='paragraph'>{description}</div>
        </div>
        <div className='content extra'>
          <div className='date'>
            <FontAwesomeIcon icon={faCalendar} className='icon-left' />
            {date}
          </div>
        </div>
      </div>
    );
  }
}

PortfolioCard.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default PortfolioCard;
