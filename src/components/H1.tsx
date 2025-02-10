"use client"
import React from 'react';
import * as motion from "motion/react-client";

interface Props {
      text: string;
      id?: string;
}

const H1: React.FC<Props> = ({ text }) => {
      const titleClass ="font-kalnia text-6xl md:text-5xl lg:text-6xl"

      return (
            <motion.h1 
                  className={titleClass}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "tween", duration: 0.5, ease: "easeIn"}}
                  viewport={{ once: true, amount: 0.5 }}
            >
                  {text}
            </motion.h1>
      );
}

export default H1;