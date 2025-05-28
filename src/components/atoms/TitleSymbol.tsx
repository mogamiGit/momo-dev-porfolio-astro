import React from 'react';

interface Props {
  children: React.ReactNode;
}

const TitleSymbol: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex gap-x-1 items-center">
      <span className="rotate-180 text-yellow-chick">&#10095;</span>
      <p className="p-x-10 text-2xl font-semibold">{children}</p>
      <span className="text-yellow-chick">&#10095;</span>
    </div>
  );
};

export default TitleSymbol;
