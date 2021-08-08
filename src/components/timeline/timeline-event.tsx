import React from 'react';

import { ClassNameHelpers } from '../../helpers/class-name-helpers';
import EmploymentCard from '../employment-card/employment-card';

import './timeline-event.scss';

interface Props {
  description?: string;
  imageSource: string;
  location: string;
  month: string;
  reverseDirection?: boolean;
  title: string;
  year: number;
}

const TimelineEvent = (props: Props) => {

  const { imageSource, location, month, reverseDirection = false, title, year } = props;

  const componentClassName = ClassNameHelpers.getClassName(
    'timeline-event',
    reverseDirection ? 'reverse' : ''
  );

  return (
    <div className={componentClassName}>
      <EmploymentCard
        companyLogo={imageSource}
        companyName={location}
        jobTitle={title}
        reverseDirection={reverseDirection}
      />
      <div className='event-orb' />
      <div className='event-timestamp'>
        {month} {year}
      </div>
    </div>
  );
};

export default TimelineEvent;
