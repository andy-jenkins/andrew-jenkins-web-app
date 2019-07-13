import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

import portrait from '../assets/image/portrait.jpg';

class Bio extends Component {

  graphicDesignBio =
    "Design is a hobby of mine and something that I have picked up over the years " +
    "as I have experimented with logos, websites, CVs and business cards. " +
    "Below you can find a portfolio of some design projects I have undertaken since 2014.";
  
  softwareDevelopmentBio =
    "After graduating from Queen's University Belfast " +
    "with a First Class Honors Degree in Software Engineering (BEng), " +
    "I joined the industry as a Graduate Software Developer in the Digital Pathology domain. " +
    "I have since changed jobs and am now a Senior Software Engineer " +
    "in the Aerospace/Electrical/Mechanical engineering domain.";

  render() {
    return (
      <div className='bio segment'>
        <div className='left'>
          <div className='section'>
            <div className='title'>
              <FontAwesomeIcon icon={faCode} className='big-icon' />
              <h1>Software Development</h1>
            </div>
            <p>{this.softwareDevelopmentBio}</p>
          </div>
          <div className='section'>
            <div className='title'>
              <FontAwesomeIcon icon={faPaintBrush} className='big-icon' />
              <h1>Graphic Design</h1>
            </div>
            <p>{this.graphicDesignBio}</p>
          </div>
        </div>
        <div className='right'>
          <img className='portrait' alt='Portrait' src={portrait} />
        </div>
      </div>
    );
  }
}

export default Bio;
