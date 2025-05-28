import React from 'react';

interface Props {
      title: string;
      children: React.ReactNode;
}

const Bullets: React.FC<Props> = ({ title, children }) => {
      return (
            <div className="flex flex-col gap-2">
                  <p className="text-blue-violet">
                        {title}
                  </p>
                  <div className="flex flex-wrap gap-y-2">
                        {children}
                  </div>
            </div>
      );
};

export default Bullets;
