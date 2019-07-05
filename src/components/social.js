import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const facebookUrl = 'https://www.facebook.com/jenks128';
const instagramUrl = 'https://www.instagram.com/andyyjay';
const linkedInUrl = 'https://www.linkedin.com/in/andrew-jenkins-7371b0a5';

class Social extends Component {

  static renderSocialTitle(text, icon) {
    return [
      <FontAwesomeIcon key='icon' icon={icon} className='big-icon' />,
      <h1 key={'text'}>{text}</h1>
    ];
  }

  static renderVisitButton(link) {
    return (
      <a href={link} target='new'>
        <button>
          Visit
          <FontAwesomeIcon icon={faArrowCircleRight} className='icon-right' />
        </button>
      </a>
    );
  }

  render() {
    return (
      <div className='social'>
        <div className='item'>
          <div className='top'>{Social.renderSocialTitle('LinkedIn', faLinkedin)}</div>
          <div className='bottom'>{Social.renderVisitButton(linkedInUrl)}</div>
        </div>
        <div className='item'>
          <div className='top'>{Social.renderSocialTitle('Facebook', faFacebookSquare)}</div>
          <div className='bottom'>{Social.renderVisitButton(facebookUrl)}</div>
        </div>
        <div className='item'>
          <div className='top'>{Social.renderSocialTitle('Instagram', faInstagram)}</div>
          <div className='bottom'>{Social.renderVisitButton(instagramUrl)}</div>
        </div>
      </div>
    );
  }
}

export default Social;
