import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ArrowLinkIcon from "../../../../public/images/arrowIcon.tsx";
import type { CardData } from "./types.ts";
import CardCarousel from "./CardCarousel.tsx";

interface Props {
  title?: string;
  description?: string;
  cards: CardData[];
}

const HorizontalScrollCarousel: React.FC<Props> = ({ title, description, cards }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  const opacity = useTransform(scrollYProgress, [0, 1], ["opacity(1)", "opacity(0)"]);

  return (
    <div ref={targetRef} className="h-[300vh] w-screen bg-gradient-to-b from-gray-300 dark:from-blue-violet to-white dark:to-dark-blue">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="flex gap-[7rem] md:gap-[8.5rem] items-center">
          <motion.div
            style={{ filter: blur }}
            className="h-full w-screen md:w-[40rem] flex flex-col gap-5 px-8 lg:px-20 mb-14 md:mb-0"
          >
            <p className="font-kalnia text-4xl">{title}</p>
            <p className="text-gray-600 dark:text-gray-200"><span dangerouslySetInnerHTML={{ __html: description }} /></p>
          </motion.div>
          <motion.div style={{ x, transition: "transform 0.5s ease-out" }} className="flex gap-[7rem] md:gap-[6rem] items-center">
            {cards.map((card, index) => {
              return (
                <CardCarousel card={{
                  url: card.url,
                  title: card.title,
                  id: card.id,
                  type: card.type,
                }} key={index} />
              );
            })}
            <div className="flex-shrink-0 md:w-0 w-[12rem]" />
          </motion.div>
          <motion.div
            style={{ filter: opacity }}
            className="absolute bottom-0 p-8 w-full flex gap-2 items-center px-8 lg:px-20">
            <p className="text-gray-500 dark:text-gray-200">Scroll down to see more</p>
            <ArrowLinkIcon className="animate-pulse text-blue-violet dark:text-white" />
          </motion.div>
        </div>
      </div>
    </div >
  );
};

export default HorizontalScrollCarousel;
