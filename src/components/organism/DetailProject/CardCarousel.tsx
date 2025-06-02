import React from 'react'
import { motion } from "motion/react";
import type { CardData } from "./types.ts";

interface Props {
  card: CardData;
}

const CardCarousel: React.FC<Props> = ({ card }) => {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ scale: 0.7 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.9 }}
    >
      <motion.div
        key={card.id}
        className="w-[20rem] h-[25rem] md:w-[27rem] lg:w-[37rem] bg-white rounded-lg overflow-hidden"
        initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}
        animate={{ boxShadow: '30px 30px 24px rgba(0, 0, 0, 0.1)' }}
      >
        {card.type === "image" ? (
          <img
            className="w-full h-full object-cover"
            src={card.url}
            alt={card.title}
          />
        ) : (
          <video
            className="w-full h-full object-cover"
            src={card.url}
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </motion.div>
      <motion.div
        className="bg-white dark:bg-black/60 rounded-lg p-3 border border-gray-300 dark:border-blue-violet"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          opacity: {
            duration: 0.5,
            delay: 0.5,
          },
          x: {
            duration: 0.4,
            ease: "easeOut",
            delay: 0.8,
          }
        }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <p className="text-gray-500 dark:text-gray-200 text-sm line-clamp-1">{card.title}</p>
      </motion.div>
    </motion.div>
  );
}

export default CardCarousel;