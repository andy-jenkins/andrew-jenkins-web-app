import React, { Component } from 'react';

import Bio from './bio';
import Downloads from './downloads';
import Footer from './footer';
import Header from './header';
import Portfolio from './portfolio';
import Social from './social';

class App extends Component {

  render() {
    return [
      <Header key='header' />,
      <Downloads key='downloads' />,
      <Bio key='bio' />,
      <Social key='social' />,
      <Portfolio key='portfolio' />,
      <Footer key='footer' />
    ];
  }
}

export default App;
