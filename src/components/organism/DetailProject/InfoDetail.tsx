import React from "react";
import SectionDescription from "../../molecules/SectionDescription";
import Button from "../../atoms/Button";
import ArrowDiagonalIcon from "../../../../public/images/arrowDiagonalIcon";
import * as motion from "motion/react-client";
import type { ButtonData } from "./types";

interface Props {
  year: string;
  client?: string;
  description: string;
  tags?: string[];
  button?: ButtonData;
}

const InfoDetail: React.FC<Props> = ({ year, client, description, tags, button }) => {
  const buttonClass = "group rounded border-2 dark:border dark:border-white border-dark-blue px-4 py-2 hover:border-blue-violet dark:hover:border-blue-violet transition-all ease-in-out flex gap-2 items-center";

  return (
    <div className="w-full grid gap-12 px-8 grid-cols-1 md:grid-cols-3 pb-10 md:pb-4">
      <div className="flex flex-col gap-10 col-span-1 md:col-span-2">
        <SectionDescription title="year" description={year} className="font-semibold" />
        {client && <SectionDescription title="client" description={client} />}
        <SectionDescription title="description" className="leading-9" description={description} />
      </div>
      <div className="flex flex-col gap-16 md:gap-20">
        <SectionDescription title="technologies" tags={tags} />
        {button &&
          <a href={button.link} target="_blank">
            <motion.button
              className={buttonClass}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ scale: { type: "spring", bounce: 0.4, duration: 0.7 } }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {button.text} <ArrowDiagonalIcon className="group-hover:text-blue-violet scale-90 group-hover:scale-110 ease-out duration-150" />
            </motion.button>
          </a>
        }
      </div>
    </div>
  );
}

export default InfoDetail;
