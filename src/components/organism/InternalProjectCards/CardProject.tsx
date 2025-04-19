import React, { type ReactElement } from 'react';
import classNames from 'classnames';
import Check from "../../atoms/Check";
import Button from "../../atoms/Button";

interface Props {
  title: string;
  description: string;
  buttons?: { text: string; link: string; icon?: ReactElement }[];
  checks?: string[];
  linkImage: string;
  altImage: string;
  className?: string;
  onClick?: () => void;
}

const cardProject: React.FC<Props> = ({ title, description, buttons = [], checks = [], ...rest }) => {

  return (
    <div
      className={
        classNames(
          rest.className,
          `h-[50%] md:h-[25rem] flex-col md:flex-row flex items-center gap-6 border-solid border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-white dark:bg-dark-blue drop-shadow-[5px_10px_5px_rgba(74,104,240,0.1)]`,
        )}
    >
      <div className="h-full w-full md:w-1/3 overflow-hidden">
        <div className='h-full w-full'>
          <img
            src={rest.linkImage}
            alt={rest.altImage}
            className="object-cover w-full h-full rounded"
          />
        </div>
      </div>
      <div className='h-full w-2/3 flex flex-col justify-center items-start gap-6'>
        <div className='w-full flex flex-col justify-center gap-3'>
          <p className='font-bold text-2xl'>{title}</p>
          <p className='line-clamp-3'>{description}</p>
          {checks.length > 0 && (
            <div className='flex flex-col md:flex-row gap-3'>
              {checks.map((check, index) => (
                <Check key={index} text={check} />
              ))}
            </div>
          )}
        </div>
        {buttons.length > 0 && (
          <div className='flex gap-4'>
            {buttons.map((button, index) => (
              <Button key={index} text={button.text} link={button.link} icon={button.icon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default cardProject;
