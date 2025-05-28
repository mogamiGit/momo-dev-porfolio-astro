import React from 'react'
import TitleSection from '../atoms/TitleSection';
import { projects } from "../../data/allProjectsData";
import AccordionItem from './AccordionItem';
import Button from '../atoms/Button';

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full mx-auto pt-20"
      data-scroll="seccion1"
    >
      <TitleSection text="projects" />
      {
        projects.map((item) => {
          return (
            <AccordionItem
              name={item.title}
              highlight={item.subtitle}
              synopsis={item.title}
              description={item.description}
              mobileImgUrl={item.mobileImgUrl}
              desktopImgUrl={item.desktopImgUrl}
              alt={item.altImage}
              checkItems={item.checks}
            >
              {item.buttons.map((button) => {
                return (
                  <Button
                    text={button.text}
                    link={button.link}
                    icon={
                      <img
                        className="w-4 h-4"
                        src={button.icon.src}
                        alt={button.icon.alt}
                      />
                    }
                  />
                );
              })}
            </AccordionItem>
          );
        })
      }
    </section>
  )
}

export default Projects
