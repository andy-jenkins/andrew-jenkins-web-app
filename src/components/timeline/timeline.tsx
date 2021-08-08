import React, { ReactNode } from 'react';

import { ClassNameHelpers } from '../../helpers/class-name-helpers';

import './timeline.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

const Timeline = (props: Props) => {

  const { children, className } = props;

  const componentClassName = ClassNameHelpers.getClassName(
    'timeline',
    className
  );

  return (
    <div className={componentClassName}>
      {children}
    </div>
  );
};

export default Timeline;
