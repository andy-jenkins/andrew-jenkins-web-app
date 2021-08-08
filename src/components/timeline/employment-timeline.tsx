import React from 'react';

import Timeline from './timeline';
import TimelineEvent from './timeline-event';

import aprioriLogo from '../../assets/apriori.png';
import boxfishLogo from '../../assets/boxfish.png';
import philipsLogo from '../../assets/philips.png';

const EmploymentTimeline = () => {

  return (
    <Timeline>
      <TimelineEvent
        imageSource={aprioriLogo}
        location='aPriori Technologies'
        month='March'
        title='Software Architect'
        year={2021}
      />
      <TimelineEvent
        imageSource={aprioriLogo}
        location='aPriori Technologies'
        month='March'
        reverseDirection
        title='Senior Software Engineer'
        year={2019}
      />
      <TimelineEvent
        imageSource={philipsLogo}
        location='Philips Digital & Computational Pathology'
        month='April'
        title='Software Developer'
        year={2018}
      />
      <TimelineEvent
        imageSource={philipsLogo}
        location='Philips Digital & Computational Pathology'
        month='June'
        reverseDirection
        title='Graduate Software Developer'
        year={2017}
      />
      <TimelineEvent
        imageSource={boxfishLogo}
        location='Boxfish'
        month='July'
        title='Associate Software Engineer'
        year={2015}
      />
    </Timeline>
  );
};

export default EmploymentTimeline;
