import { useState } from "react";
import * as motion from "motion/react-client";
import classNames from "classnames";

interface Props {
  title: string;
  subtitle: string;
  emoji?: string;
  className?: string;
}

const CardHighlight: React.FC<Props> = ({ title, subtitle, emoji, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerClass = classNames('rounded-md w-full flex flex-col justify-center bg-white dark:bg-dark-blue dark:drop-shadow-[0px_5px_10px_rgba(74,104,240,0.4)] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)] p-6 cursor-pointer border dark:border-blue-violet border-gray-400', className)

  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      className={containerClass}
      animate={{ height: isOpen ? "240px" : "70px" }}
      transition={{ height: { duration: 1.2, type: "spring" } }}
    >
      <motion.div className="group flex gap-2" layout="position">
        <motion.p className="text-xl font-semibold line-clamp-2">{title}</motion.p>
        <motion.p
          className="text-xl"
          layout
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.5, type: "ease-out" }}
        >{emoji}</motion.p>
      </motion.div>
      {isOpen && (
        <div className="flex flex-col justify-center gap-4 grow">
          <motion.p
            className="line-clamp-6 text-sm text-gray-500"
            style={{ opacity: isOpen ? "1" : "0" }}
          >
            {subtitle}
          </motion.p>
        </div>
      )}
    </motion.div >
  );
}

export default CardHighlight;
