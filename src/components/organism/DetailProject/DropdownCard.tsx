import { useState } from "react";
import * as motion from "motion/react-client";
import classNames from "classnames";
import ArrowLinkIcon from "../../../../public/images/arrowIcon";

interface Props {
  title: string;
  description: string;
  emoji?: string;
  className?: string;
}

const DropdownCard: React.FC<Props> = ({ title, description, emoji, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerClass = classNames('rounded-md w-full flex flex-col justify-center bg-white dark:bg-dark-blue dark:drop-shadow-[0px_5px_10px_rgba(74,104,240,0.4)] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)] cursor-pointer border dark:border-blue-violet border-gray-400 py-4', className)

  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      className={containerClass}
      animate={{ height: isOpen ? "230px" : "90px" }}
      transition={{ height: { duration: 2.5, type: "spring" } }}
    >
      <motion.div className="w-full group flex gap-3 items-center px-6" layout="position">
        <motion.p
          className="text-xl"
          layout
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.5, type: "linear" }}
        >{emoji}</motion.p>
        <motion.p className="w-full text-lg leading-[1.2] font-semibold line-clamp-2 break-words">{title}</motion.p>
        <ArrowLinkIcon className={`animate-pulse text-blue-violet dark:text-white ${isOpen ? "rotate-90" : "rotate-0"}`} />
      </motion.div>
      {isOpen && (
        <div className="flex flex-col justify-center gap-4 grow px-6">
          <motion.p
            className="line-clamp-6 text-md leading-[1.5] md:text-sm text-gray-500"
            animate={{ opacity: isOpen ? [0, 0.5, 1] : [1, 0.5, 0] }}
            transition={{ opacity: { delay: 0.3, type: "ease-in-out" } }}
          >
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </motion.p>
        </div>
      )}
    </motion.div >
  );
}

export default DropdownCard;
