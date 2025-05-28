import React from 'react'
import TitleSection from '../atoms/TitleSection';
import TitleSymbol from '../atoms/TitleSymbol';
import Bullets from '../atoms/Bullets';
import Tag from '../atoms/Tag';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full mx-auto pt-20" data-scroll="seccion3">
      <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
        <img
          src="images/profile_photo.png"
          alt="profile image"
          className="max-w-80"
        />
        <div className="flex flex-col lg:flex-row gap-10">
          <div>
            <TitleSection text="about_me" />
          </div>
          <p>
            Hey you! I'm the creative mind behind the keyboard. Constantly on
            the move and infusing energy into every project.
            <br /><br />My mantra is simple: learn, design, develop, have fun,
            repeat! Because, honestly, why should the process of creating
            something incredible be boring? I love pushing boundaries,
            exploring new trends, and finding the perfect balance between
            functionality and style.
            <br /><br />Let's turn your digital dreams into vibrant realities
            together!
          </p>
        </div>
      </div>
      <div className="pt-6 flex flex-col gap-12">
        <div className="mt-10">
          <TitleSymbol>Hard skills</TitleSymbol>
          <div className="flex gap-x-10 gap-y-8 flex-wrap mt-6">
            <Bullets title="Languages">
              <Tag text="HTML" variant="gray" />
              <Tag text="CSS" variant="gray" />
              <Tag text="JS" variant="gray" />
              <Tag text="Swift" variant="gray" />
            </Bullets>
            <Bullets title="Frameworks and SDKs">
              <Tag text="React" variant="gray" />
              <Tag text="Astro" variant="gray" />
              <Tag text="Rive" variant="gray" />
              <Tag text="Motion.dev" variant="gray" />
              <Tag text="Svelte" variant="gray" />
              <Tag text="SwiftUI" variant="gray" />
              <Tag text="SwiftData" variant="gray" />
            </Bullets>
            <Bullets title="Patterns">
              <Tag text="MVVM" variant="gray" />
              <Tag text="MVC" variant="gray" />
            </Bullets>
            <Bullets title="Tools & Technologies">
              <Tag text="Figma" variant="gray" />
              <Tag text="RESTful APIs" variant="gray" />
              <Tag text="Postman" variant="gray" />
              <Tag text="Git" variant="gray" />
            </Bullets>
            <Bullets title="Methodologies">
              <Tag text="Design Thinking" variant="gray" />
              <Tag text="Atomic Design" variant="gray" />
              <Tag text="Mobile First" variant="gray" />
              <Tag text="Agile" variant="gray" />
            </Bullets>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <TitleSymbol>Soft skills</TitleSymbol>
          <div className="flex flex-wrap gap-y-2">
            <Tag text="Constantly changing" variant="gray" />
            <Tag text="Self-taught" variant="gray" />
            <Tag text="Problem solving" variant="gray" />
            <Tag text="Teamwork" variant="gray" />
          </div>
        </div>
        <picture> </picture>
      </div>
    </section>
  )
}

export default About;
