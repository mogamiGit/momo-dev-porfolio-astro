import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ArrowLinkIcon from "../../../public/images/arrowIcon";

type CardType = {
  url: string;
  title: string;
  id: number;
};

interface Props {
  title?: string;
  description?: string;
  cards: CardType[];
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
            className="h-full w-screen md:w-[40rem] flex flex-col gap-5 px-8 lg:px-20"
          >
            <p className="font-kalnia text-4xl">{title}</p>
            <p className="text-gray-600 dark:text-gray-200"><span dangerouslySetInnerHTML={{ __html: description }} /></p>
          </motion.div>
          <motion.div style={{ x, transition: "transform 0.5s ease-out" }} className="flex gap-[7rem] md:gap-[8.5rem] items-center">
            {cards.map((card) => {
              return (
                <motion.div
                  key={card.id}
                  className="w-[20rem] h-[25rem] md:w-[25rem] lg:w-[35rem] bg-white rounded-lg overflow-hidden"
                  initial={{ scale: 1, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}
                  whileInView={{ scale: 1.3, boxShadow: '30px 30px 24px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.9 }}
                >
                  <img className="w-full h-full object-cover" src={card.url} alt={card.title} />
                </motion.div>
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
