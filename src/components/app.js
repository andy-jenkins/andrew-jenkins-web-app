import React, { Component } from 'react';

import ScrollUpButton from 'react-scroll-up-button';

import Bio from './bio';
import Contact from './contact';
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
      <Contact key='contact' />,
      <Footer key='footer' />,
      <ScrollUpButton key='scroll-up-button' ContainerClassName='scroll-up-button' />
    ];
  }
}

export default App;
