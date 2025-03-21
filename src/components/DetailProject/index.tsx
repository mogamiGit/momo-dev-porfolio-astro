import { Fragment } from "react";
import H1 from "../H1";
import DropdownCard from "./DropdownCard";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import InfoDetail from "./InfoDetail";
import * as motion from "motion/react-client";


type Button = {
  link: string;
  text: string;
}

type infoDetail = {
  year: string;
  client: string;
  description: string;
  tags: string[];
  button: Button;
}

type DropdownCard = {
  title: string;
  subtitle: string;
  emoji: string;
}

type CardType = {
  url: string;
  title: string;
  id: number;
};

interface Props {
  infoDetail: infoDetail;
  dropdownCards: DropdownCard[];
  cards: CardType[];
}

const DetailProject: React.FC<Props> = ({ infoDetail, dropdownCards, cards }) => {
  return (
    <Fragment>
      <section className="grid grid-cols-2 w-full mx-auto gap-6 items-center p-8">
        <div>
          <H1
            className="line-clamp-5"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, omnis?"
          />
        </div>
        <motion.div
          className="h-[400px] w-full overflow-hidden rounded-lg"
          animate={{ scale: [0.9, 1], opacity: [0, 1] }}
          transition={{ delay: 0.6, duration: 0.5, type: "ease-out" }}
        >
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>
      <section className="mx-auto flex flex-col gap-16 pt-16">
        <InfoDetail
          year={infoDetail.year}
          client={infoDetail.client}
          description={infoDetail.description}
          tags={infoDetail.tags}
          button={infoDetail.button}
        />
        <div
          className="px-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {
            dropdownCards.map((item) => (
              <DropdownCard
                title={item.title}
                subtitle={item.subtitle}
                emoji={item.emoji}
              />
            ))
          }
        </div>
      </section>
      <HorizontalScrollCarousel cards={cards} />
    </Fragment>
  );
}

export default DetailProject;
