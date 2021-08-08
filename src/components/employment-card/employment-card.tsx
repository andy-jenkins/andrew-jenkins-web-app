import React from 'react';

import { ClassNameHelpers } from '../../helpers/class-name-helpers';

import './employment-card.scss';

interface Props {
  companyLogo: string;
  companyName: string;
  jobTitle: string;
  reverseDirection?: boolean;
}

const EmploymentCard = (props: Props) => {

  const { companyLogo, companyName, jobTitle, reverseDirection = false } = props;

  const componentClassName = ClassNameHelpers.getClassName(
    'employment-card',
    reverseDirection ? 'reverse' : ''
  );

  return (
    <div className={componentClassName}>
      <img alt='Company Logo' className='company-logo' src={companyLogo} />
      <div className='employment-info'>
        <h3>{jobTitle}</h3>
        <p>{companyName}</p>
      </div>
    </div>
  );
};

export default EmploymentCard;
