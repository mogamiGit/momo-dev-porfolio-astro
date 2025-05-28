import React from 'react'
import TitleSection from '../atoms/TitleSection';
import ContactForm from './ContactForm';
import SectionDescription from '../molecules/SectionDescription';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full mx-auto flex flex-col gap-10"
      data-scroll="seccion4"
    >
      <TitleSection text="break_the_ice" />
      <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
        <div className="md:col-span-2 col-span-1">
          <ContactForm />
        </div>
        <div className="flex flex-col gap-8">
          <SectionDescription
            title="contact"
            description="mogami.creative@gmail.com"
          />
          <div className="w-full flex flex-col gap-2">
            <SectionDescription
              title="linkedin"
              description="monicagalandelallana"
              link="https://www.linkedin.com/in/monicagalandelallana"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;