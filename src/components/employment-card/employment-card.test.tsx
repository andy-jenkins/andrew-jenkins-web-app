import React from 'react';

import { render, screen } from '@testing-library/react';

import companyLogo from '../../assets/boxfish.png';

import EmploymentCard from './employment-card';

describe(EmploymentCard.name, () => {

  const employmentCard = (
    <EmploymentCard
      companyLogo={companyLogo}
      companyName='Acme Ltd.'
      jobTitle='CEO'
    />
  );

  it('should render company name', () => {

    // Arrange.
    render(employmentCard);

    // Act.
    const companyName = screen.getByText('Acme Ltd.');

    // Assert.
    expect(companyName).toBeInTheDocument();
  });

  it('should render job title', () => {

    // Arrange.
    render(employmentCard);

    // Act.
    const jobTitle = screen.getByText('CEO');

    // Assert.
    expect(jobTitle).toBeInTheDocument();
  });

});
