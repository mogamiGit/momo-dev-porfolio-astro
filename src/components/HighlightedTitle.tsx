"use client"
import React from 'react';
import * as motion from "motion/react-client";

interface Props {
      title: string;
      subtitle: string;
}

const HighlightedTitle: React.FC<Props> = ({ title, subtitle }) => {
      const containerClass = "flex flex-col justify-center items-center gap-2 lg:py-0 md:py-5";

      const titleClass = "text-3xl text-yellow-chick";

      return (
            <div className={containerClass}>
                  <motion.p 
                        className={titleClass}
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                        viewport={{ amount: 1 }}
                  >
                        {title}
                  </motion.p>
                  <p className='text-sm text-gray-500'>{subtitle}</p>
            </div>
      );
};

export default HighlightedTitle;