import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-76%"]);

  return (
    <div ref={targetRef} className="h-[300vh] w-screen bg-gray-100 dark:bg-black rounded-lg">
      <div className="sticky top-0 flex h-screen items-center rounded p-4 ">
        <motion.div style={{ x, transition: "transform 0.5s ease-out" }} className="flex gap-[200px] items-center">
          <div className="h-full w-[400px] flex flex-col gap-5">
            <p className="font-kalnia text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, saepe?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus, qui dolorum corrupti delectus fuga maxime obcaecati inventore animi, iste mollitia nesciunt vero soluta blanditiis esse at dolor? Repellat, modi.</p>
          </div>
          {cards.map((card) => {
            return (
              <motion.div
                key={card.id}
                className="w-[300px] h-[300px] bg-white rounded"
                initial={{ scale: 1, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}
                whileInView={{ scale: 1.3, boxShadow: '30px 30px 24px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false, amount: 0.9 }}
              >
                <img className="w-full h-full object-cover" src={card.url} alt={card.title} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
