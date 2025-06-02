import React, { Fragment } from "react";
import DropdownCard from "./DropdownCard";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import InfoDetail from "./InfoDetail";
import TitleSection from "../../atoms/TitleSection";
import type { infoDetailData, DropdownCardData, HorizontalScrollCarouselData, RiveFileData } from "./types"
import HeaderDetail from "./HeaderDetail";

interface Props {
  title: string;
  linkImage: string;
  infoDetail: infoDetailData;
  dropdownCards: DropdownCardData[];
  horizontalScrollCarousel: HorizontalScrollCarouselData;
  children?: React.ReactNode;
  iconsRiveDecoration?: RiveFileData[];
}

const DetailProject: React.FC<Props> = ({ title, linkImage, infoDetail, dropdownCards, horizontalScrollCarousel, iconsRiveDecoration = [], ...rest }) => {

  return (
    <Fragment>
      <HeaderDetail
        title={title}
        linkImage={linkImage}
        iconsRiveDecoration={iconsRiveDecoration}
      />
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
