import React from 'react';
import classNames from 'classnames';

interface Props {
  type?: "submit" | "reset" | "button";
  text: string;
  link?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<Props> = ({ type, text, link, disabled = false, ...rest }) => {
  const containerClass = classNames("min-h-14 max-w-[200px] text-white font-medium text-sm px-5 py-2.5 text-center flex justify-center items-center gap-3 me-2 mb-2",
    disabled
      ? "bg-gray-400 text-white cursor-not-allowed text-gray-100"
      : "bg-medium-blue hover:bg-dark-blue/80 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 dark:focus:ring-gray-500 dark:hover:bg-[#415b69]/30",
    rest.className
  )

  const handleClick = () => {
    if (disabled) return;
    if (link) window.location.href = link;
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={containerClass}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {rest.icon && <span>{rest.icon}</span>}
      {text}
    </button>
  );
}

export default Button;