"use client"
import React from 'react';
import * as motion from "motion/react-client";

interface Props {
      text: string;
}

const TitleSection: React.FC<Props> = ({ text }) => {
      return(
            <div className="flex gap-1 text-blue-violet text-5xl font-thin pb-5">
                  <motion.p
                        className='w-3'
                        animate={{ y: [0, -10, 0], fontWeight: [300, 500, 300] }}
                        transition={{
                              type: "tween",
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut"
                        }}
                  >
                        .
                  </motion.p>
                  <p>
                        {text}
                  </p>
            </div>
      );
}

export default TitleSection;