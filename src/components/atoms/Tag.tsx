import React from 'react';
import * as motion from "motion/react-client";
import classNames from 'classnames';

interface Props {
  text: string;
  variant: "yellow" | "blue" | "gray";
  icon?: React.ReactNode;
  delay?: number;
}

const Tag: React.FC<Props> = ({ text, variant, delay }) => {
  const tagClass = classNames('inline-flex text-sm font-medium me-2 px-4 py-2 rounded-full',
    {
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border border-yellow-200': variant === "yellow",
      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border border-blue-200': variant === "blue",
      'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-400 hover:text-black hover:border-gray-300 dark:hover:text-white dark:hover:border-gray-100': variant === "gray"
    }
  );

  return (
    <motion.div
      className={tagClass}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        scale: { type: "spring", bounce: 0.4, duration: 0.8, delay: delay },
        opacity: { duration: 0.3, delay: delay }
      }}
      viewport={{ once: true }}
    >
      <motion.span>
        {text}
      </motion.span>
    </motion.div>
  );
}

export default Tag;
