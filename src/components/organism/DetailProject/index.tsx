import React, { Fragment, useState, useEffect } from "react";
import H1 from "../../atoms/H1";
import DropdownCard from "./DropdownCard";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import InfoDetail from "./InfoDetail";
import * as motion from "motion/react-client";
import TitleSection from "../../atoms/TitleSection";
import type { infoDetailData, DropdownCardData, HorizontalScrollCarouselData } from "./types"

interface Props {
  title: string;
  linkImage: string;
  infoDetail: infoDetailData;
  dropdownCards: DropdownCardData[];
  horizontalScrollCarousel: HorizontalScrollCarouselData;
  children?: React.ReactNode;
}

const DetailProject: React.FC<Props> = ({ title, linkImage, infoDetail, dropdownCards, horizontalScrollCarousel, ...rest }) => {

  return (
    <Fragment>
      <section className="flex flex-col lg:flex-row w-full mx-auto gap-10 md:gap-8 items-center p-8">
        <div>
          <H1
            className="line-clamp-5"
            text={title}
          />
        </div>
        <motion.img
          src={linkImage}
          alt={`header image del proyecto: ${title}`}
          className="h-auto w-full max-w-[800px] object-cover"
          initial={{ opacity: 0 }}
          animate={{ scale: [0.9, 1], opacity: [0, 1] }}
          transition={{ delay: 0.6, duration: 0.5, type: "ease-out" }}
        />
      </section>
      <section className="mx-auto flex flex-col gap-16 pt-10 md:pt-16 mb-6">
        <InfoDetail
          year={infoDetail.year}
          client={infoDetail.client}
          description={infoDetail.description}
          tags={infoDetail.tags}
          button={infoDetail.button}
        />
        <div className="flex flex-col gap-8 px-8 ">
          <TitleSection text="highlights" />
          <div
            className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {
              dropdownCards.map((item) => (
                <DropdownCard
                  title={item.title}
                  description={item.description}
                  emoji={item.emoji}
                />
              ))
            }
          </div>
        </div>
        <div className="px-8">
          {rest.children}
        </div>
      </section>
      <HorizontalScrollCarousel title={horizontalScrollCarousel.title} description={horizontalScrollCarousel.description} cards={horizontalScrollCarousel.cards} />
    </Fragment>
  );
}

export default DetailProject;
