import React from 'react';
import * as motion from "motion/react-client";

interface Props {
  year: string;
  title: string;
  subtitle: string;
}

const ListItem: React.FC<Props> = ({ year, title, subtitle }) => {
  const containerClass =
    "flex flex-1 flex-col md:flex-row items-top py-8 gap-5 border-solid border-b-light border-gray-300";
  const yearClass = "flex gap-2 items-center justify-center text-lg";

  const yearAnimation = {
    hidden: { opacity: 0, scaleY: 0.5, y: 0 },
    visible: { opacity: 1, scaleY: 1, y: 0 },
    hover: { y: -5 }
  };

  const colorAnimation = {
    hidden: { color: "#6b7280" },
    visible: { color: "#6b7280" },
    hover: { color: "#4A68F0" }
  };

  const titleVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const subtitleVariants = {
    hidden: { y: 6, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return(
    <motion.div 
      className={containerClass}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='basis-1/3 flex flex-start items-start'>
        <div className={yearClass}>
          <motion.p 
            variants={colorAnimation}
            transition={{ duration: 0.3 }}
          >
            [
          </motion.p>
          <motion.p
            className="font-kalnia font-bold"
            variants={yearAnimation}
            transition={{
              scaleY: { duration: 0.5, type: "damping", bounce: 0.2 },
              opacity: { duration: 0.3 }
            }}
            style={{ transformOrigin: "bottom" }}
          >
            {year}
          </motion.p>
          <motion.p 
            variants={colorAnimation}
            transition={{ duration: 0.3 }}
          >
            ]
          </motion.p>
        </div>
      </div>
      <div className="basis-2/3 w-full">
        <motion.p 
          className="font-semibold uppercase text-lg pb-1"
          variants={titleVariants}
          transition={{
            x: { type: "tween", duration: 0.6, ease: "easeOut", delay: 0.5 }, 
            opacity: { duration: 0.4, delay: 0.5 }
          }}
        >
          {title}
        </motion.p>
        <motion.p 
          className="text-sm text-blue-violet"
          variants={subtitleVariants}
          transition={{
            y: { type: "tween", duration: 0.3, ease: "easeInOut", delay: 1.4 }, 
            opacity: { duration: 0.2, delay: 1.4 }
          }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ListItem;
