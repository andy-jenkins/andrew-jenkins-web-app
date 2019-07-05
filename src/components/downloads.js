import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import cv from '../assets/andrew-jenkins-cv.pdf';

class Downloads extends Component {

  render() {
    return (
      <div className='downloads segment'>
        <FontAwesomeIcon icon={faFilePdf} />
        <h1>Want to download my CV?</h1>
        <a href={cv} target='new' download>
          <button>Click here</button>
        </a>
      </div>
    );
  }
}

export default Downloads;
