import React from 'react';
import classNames from 'classnames';

interface Props {
      className?: string;
}

export const ArrowLinkIcon: React.FC<Props> = ({
      className
}) => {
      const iconClass = classNames(
            'h-4 stroke-current fill-current',
            className,
      );

      return (
            <svg
                  viewBox="0 0 31 36"
                  fill="none"
                  className={iconClass}
                  xmlns="http://www.w3.org/2000/svg"
            >
                  <path d="M0.985931 35.069L0.985931 28.102L23.9882 18.3483V17.791L0.985931 7.89795L0.985931 0.93103L30.9859 13.9592V22.1105L0.985931 35.069Z" fill='currentColor' />
            </svg>

      );
};

export default ArrowLinkIcon;