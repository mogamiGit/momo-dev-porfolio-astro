import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export const ArrowDiagonalIcon: React.FC<Props> = ({
  className
}) => {
  const iconClass = classNames(
    'h-4 stroke-current fill-current',
    className,
  );

  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className={iconClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 11L11 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.9998 8.40263V3H5.59717" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowDiagonalIcon;
