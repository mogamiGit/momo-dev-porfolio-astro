import React from "react";
import SectionDescription from "../SectionDescription";
import Button from "../Button";
import ArrowDiagonalIcon from "../../../public/images/arrowDiagonalIcon";

interface Button {
  link: string;
  text: string;
}

interface Props {
  year: string;
  client?: string;
  description: string;
  highlights?: string[];
  button?: Button;
}

const infoDetail: React.FC<Props> = ({ year, client, description, highlights, button }) => {
  return (
    <div className="w-full grid gap-12 px-8 grid-cols-1 md:grid-cols-3 pb-10 md:pb-4">
      <div className="flex flex-col gap-10 col-span-2">
        <SectionDescription title="year" description={year} />
        {client && <SectionDescription title="client" description={client} />}
        <SectionDescription title="description" description={description} />
      </div>
      <div className="flex flex-col gap-16 md:gap-20">
        <SectionDescription title="highlights" tags={highlights} />
        {button &&
          <a href={button.link} target="_blank">
            <button className="group rounded border-2 dark:border dark:border-white border-dark-blue px-4 py-2 hover:border-blue-violet dark:hover:border-blue-violet transition-all ease-in-out flex gap-2 items-center">{button.text} <ArrowDiagonalIcon className="group-hover:text-blue-violet" /></button>
          </a>
        }
      </div>
    </div>
  );
}

export default infoDetail;
