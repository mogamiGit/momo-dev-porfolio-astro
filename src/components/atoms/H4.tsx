import React from 'react';
import * as motion from "motion/react-client";

interface Props {
      text: string;
      id?: string;
}

const H4: React.FC<Props> = ({ text }) => {
      const titleClass ="text-lg text-blue-violet"

      return (
            <motion.h2 
                  className={titleClass}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ type: "tween", duration: 0.8, ease: "easeInOut", delay: 0.5}}
                  viewport={{ once: true, amount: 0.5 }}
            >
                  {text}
            </motion.h2>
      );
}

export default H4;