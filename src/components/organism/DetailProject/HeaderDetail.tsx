import React from "react";
import H1 from "../../atoms/H1";
import { useRive } from "@rive-app/react-canvas";
import * as motion from "motion/react-client";
import type { RiveFileData } from "./types";

interface Props {
  title: string;
  linkImage: string;
  iconsRiveDecoration?: RiveFileData[];
}

const HeaderDetail: React.FC<Props> = ({ title, linkImage, iconsRiveDecoration = [] }) => {
  return (
    <section className="flex flex-col lg:flex-row w-full mx-auto gap-4 md:gap-8 items-center p-8 relative">
      <div className="w-full md:max-w-[350px]">
        <H1
          className="line-clamp-5"
          text={title}
        />
      </div>
      <div>
        <motion.img
          src={linkImage}
          alt={`header image del proyecto: ${title}`}
          className="h-auto w-full max-w-[800px] object-cover"
          initial={{ opacity: 0 }}
          animate={{ scale: [0.9, 1], opacity: [0, 1] }}
          transition={{ delay: 0.6, duration: 0.5, type: "ease-out" }}
        />
      </div>

      {iconsRiveDecoration.map((icon, index) => {
        const { RiveComponent } = useRive({
          src: icon.src,
          autoplay: true,
          stateMachines: icon.stateMachine,
        });

        return (
          <div key={index} className={icon.className}>
            <RiveComponent />
          </div>
        );
      })}
    </section>
  );
};

export default HeaderDetail;