import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './app';

describe(App.name, () => {

  it('should render employment timeline', () => {

    // Arrange.
    render(<App />);

    // Act.
    const timelineEntry = screen.getByText('Feb2017');

    // Assert.
    expect(timelineEntry).toBeInTheDocument();
  });

});
