import React, { Component } from 'react';

import Header from './header';
import Bio from './bio';

class App extends Component {

  render() {
    return [
      <Header />,
      <Bio />
    ];
  }
}

export default App;
