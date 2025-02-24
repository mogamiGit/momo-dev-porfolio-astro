import React, { useState, useEffect } from "react";
import CardProject from './CardProject.tsx';
import { motion } from "motion/react";
import ArrowIcon from "../../../public/images/arrowIcon.tsx";

interface Button {
      text: string;
      link: string;
      icon?: React.ReactElement;
}

interface Project {
      title: string;
      description: string;
      linkImage: string;
      altImage: string;
      buttons: Button[];
      checks: string[];
      onClick: () => void;
}

interface Props {
      projects: Project[];
      autoSlide?: boolean;
      autoSlideTime?: number;
}

const Carousel: React.FC<Props> = ({ projects, autoSlide = false, autoSlideTime = 3000 }) => {
      // Carousel Slide
      const [currentSlide, setCurrentSlide] = useState(0);

      const prev = () =>
            setCurrentSlide((currentSlide) => (currentSlide === 0 ? projects.length - 1 : currentSlide - 1));
      const next = () =>
            setCurrentSlide((currentSlide) => (currentSlide === projects.length - 1 ? 0 : currentSlide + 1));

      useEffect(() => {
            if (!autoSlide) return;
            const slideInterval = setInterval(next, autoSlideTime);
            return () => clearInterval(slideInterval);
      }, [autoSlide, autoSlideTime]);

      const buttonArrowClass= 'h-14 w-16 flex items-center justify-center p-1 bg-white dark:bg-dark-blue text-gray-600 dark:text-white border-solid border hover:border-blue-violet dark:hover:border-blue-violet border-gray-300 dark:border-gray-700 transition-drop-shadow drop-shadow-[5px_10px_5px_rgba(74,104,240,0.1)] hover:drop-shadow-[10px_10px_10px_rgba(74,104,240,0.4)]';

      return (
            <div className="w-full flex flex-col items-center gap-6">
                  <div className="w-full relative overflow-hidden">
                        <div
                              className="flex transition-transform ease-out duration-500"
                              style={{ transform: `translateX(-${currentSlide * 100}%)`}}
                        >
                              {projects.map((project, i) => (
                                    <div key={i} className="w-full flex-shrink-0">
                                    <CardProject
                                          title={project.title}
                                          description={project.description}
                                          linkImage={project.linkImage}
                                          altImage={project.altImage}
                                          buttons={project.buttons}
                                          checks={project.checks}
                                    />
                                    </div>
                              ))}
                        </div>
                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                              <motion.button
                                    onClick={prev}
                                    className={`${buttonArrowClass} rounded-tr-xl rounded-bl-md`}
                                    whileHover={{ y: -6, x: 6 }}
                                    transition={{ type:"spring", damping: 20, stiffness: 100 }}
                              >
                                    <ArrowIcon className="transform rotate-180" />
                              </motion.button>
                              <motion.button
                                    onClick={next}
                                    className={`${buttonArrowClass} rounded-tl-xl rounded-br-md`}
                                    whileHover={{ y: -6, x: -6 }}
                                    transition={{ type:"spring", damping: 20, stiffness: 100 }}
                              >
                                    <ArrowIcon />
                              </motion.button>
                        </div>
                  </div>
                  <div>
                        <div className="flex items-start justify-center gap-2">
                              {projects.map((_, i) => (
                                    <motion.button
                                          key={i}
                                          onClick={() => setCurrentSlide(i)}
                                          className={`w-2 ${currentSlide === i ? 'dark:bg-gray-800 bg-gray-500' : 'bg-gray-300 dark:bg-gray-400'}`}
                                          animate={{ height: currentSlide === i ? '8px' : '16px' }}
                                          transition={{ duration: 0.5 }}
                                    />
                              ))}
                        </div>
                  </div>
            </div>
      );

}

export default Carousel;