import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import cv from '../assets/pdf/andrew-jenkins-cv.pdf';

class Downloads extends Component {

  render() {
    return (
      <div className='downloads segment'>
        <a href={cv} target='new' download>
          <FontAwesomeIcon icon={faFileDownload} />
        </a>
        <h1>Want to download my CV?</h1>
      </div>
    );
  }
}

export default Downloads;
