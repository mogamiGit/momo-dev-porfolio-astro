import classNames from 'classnames';
import React from 'react';

interface Card {
  text: string;
  sign: React.ReactNode;
  className?: string;
}

interface Props {

}

const IconCard: React.FC<Card> = ({ text, sign, className }) => {
  const borderClass = classNames("border-gray-300 dark:border-gray-500")

  return (
    <div className={`w-full flex flex-col lg:flex-row items-center justify-center border rounded-lg ${borderClass} ${className}`}>
      <div className={`w-full lg:w-10 self-stretch flex items-center justify-center p-3 lg:p-6 border-b lg:border-r ${borderClass}`}>
        <p className='font-kalnia text-xl'>{sign}</p>
      </div>
      <div className="p-6">
        <p>{text}</p>
      </div>
    </div>
  );
};

const ChallengeSolutions: React.FC<Props> = () => {
  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className='flex flex-col md:flex-row items-center'>
        <IconCard
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, molestiae. Repudiandae nostrum veritatis voluptatibus, excepturi enim accusantium natus porro dolor."
          sign="?"
        />
        <div className="h-12 md:w-12 md:h-0 border-r-2 border-b-0 border-dashed md:border-b-2 md:border-r-0 border-blue-violet animate-pulse"></div>
      </div>
      <IconCard
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, molestiae. Repudiandae nostrum veritatis voluptatibus, excepturi enim accusantium natus porro dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, molestiae. Repudiandae nostrum veritatis voluptatibus, excepturi enim accusantium natus porro dolor."
        sign="✅"
        className='w-full'
      />
    </div>
  );
}

export default ChallengeSolutions;
