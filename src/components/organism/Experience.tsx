import React from 'react'
import TitleSection from '../atoms/TitleSection'
import TitleSymbol from '../atoms/TitleSymbol'
import ListItem from '../molecules/ListItem'

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full mx-auto pt-20"
      data-scroll="seccion2"
    >
      <TitleSection text="experience" />
      <div className="px-5 pt-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <div>
            <TitleSymbol>Education</TitleSymbol>
            <ListItem
              year="2024"
              title="Ironhack"
              subtitle="Industrial applications of machine learning and AI"
            />
            <ListItem
              year="2023"
              title="APPLE CODING ACADEMY"
              subtitle="Swift Full Stack Bootcamp"
            />
            <ListItem
              year="2021"
              title="CICE, ESCUELA PROFESIONAL DE NUEVAS TECNOLOGIAS"
              subtitle="App Development Master"
            />
            <ListItem
              year="2018 - 2019"
              title="CICE, ESCUELA PROFESIONAL DE NUEVAS TECNOLOGIAS"
              subtitle="Web Design & Development Course"
            />
            <ListItem
              year="2011 - 2015"
              title="ESNE"
              subtitle="Graphic and Multimedia Design Degree"
            />
          </div>
          <div>
            <TitleSymbol>Work</TitleSymbol>
            <ListItem
              year="2024 - today"
              title="Freelance"
              subtitle="Graphic designer & Frontend Developer"
            />
            <ListItem
              year="2019 - 2024"
              title="CHEIL WORLDWIDE"
              subtitle="Visual & Web Layout designer"
            />
            <ListItem
              year="2016 - 2019"
              title="8BELTS"
              subtitle="Graphic designer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
