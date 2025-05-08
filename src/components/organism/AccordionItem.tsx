import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Check from '../atoms/Check';

interface Props {
  name: string;
  highlight: string;
  synopsis: string;
  description: string;
  mobileImgUrl: string;
  desktopImgUrl: string;
  alt: string;
  checkItems: string[];
  children?: React.ReactNode;
}

const AccordionItem: React.FC<Props> = ({
  name,
  highlight,
  synopsis,
  description,
  mobileImgUrl,
  desktopImgUrl,
  alt,
  checkItems,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileSrc = `/images/projects/${mobileImgUrl}`;
  const desktopSrc = `/images/projects/${desktopImgUrl}`;

  return (
    <div className="w-full border-b border-gray-200 dark:border-gray-700">
      <h2> {/* Using h2 like in the original AccordionItem.astro */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 dark:text-gray-400 gap-3 focus:outline-none"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col items-start px-8 gap-2 text-left">
            <p className="font-kalnia text-3xl">
              {name}
            </p>
            <p className="text-yellow-chick">
              {highlight}
            </p>
          </div>
          <motion.svg
            key="chevron"
            initial={false}
            animate={{ rotate: isOpen ? 0 : 180 }}
            transition={{ duration: 0.3 }}
            className="w-3 h-3 shrink-0 mr-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </motion.svg>
        </button>
      </h2>
      {/* Animated Content Area */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <picture className="m-0 w-full flex md:justify-start justify-center lg:w-1/2">
                  <source media="(max-width: 899px)" srcSet={mobileSrc} />
                  <source media="(min-width: 900px)" srcSet={desktopSrc} />
                  <img src={desktopSrc} alt={alt} className="max-w-full h-auto" />
                </picture>
                {/* Content Details */}
                <div className="w-full lg:w-1/2 flex flex-col flex-start items-start gap-2 md:gap-4 p-4">
                  <p className="text-2xl font-semibold">
                    {synopsis}
                  </p>
                  <p>
                    {description}
                  </p>
                  <div className="flex gap-x-5 pb-6 flex-wrap">
                    {checkItems.map((item, index) => (
                      <Check key={index} text={item} />
                    ))}
                  </div>
                  <div className='flex justify-start gap-4 items-center flex-wrap mb-8 md:mb-0'>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;