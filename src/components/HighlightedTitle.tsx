import React, { useState, useEffect } from 'react';
import * as motion from "motion/react-client";

interface Props {
  title: string;
  subtitle: string;
}

const HighlightedTitle: React.FC<Props> = ({ title, subtitle }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerClass = "flex flex-col justify-center items-center gap-2 lg:py-0 md:py-5";
  const titleClass = "text-3xl text-yellow-chick";

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <div className={containerClass}>
      <motion.p
        className={titleClass}
        initial={{ scale: 1.1 }}
        animate={hasAnimated ? { scale: 0.9 } : { scale: 1.1 }} 
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
      >
        {title}
      </motion.p>
      <p className='text-sm text-gray-500'>{subtitle}</p>
    </div>
  );
};

export default HighlightedTitle;
