import React, { Component } from 'react';

import Header from './header';
import Bio from './bio';
import Social from './social';
import Downloads from './downloads';

class App extends Component {

  render() {
    return [
      <Header key='header' />,
      <Downloads key='downloads' />,
      <Bio key='bio' />,
      <Social key='social' />,
      <Bio key='bio' />
    ];
  }
}

export default App;
