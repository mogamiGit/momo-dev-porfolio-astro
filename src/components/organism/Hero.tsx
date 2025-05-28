import React from 'react'
import Tag from '../atoms/Tag'
import H4 from '../atoms/H4'
import H1 from '../atoms/H1'

interface Props {

}

const Hero: React.FC<Props> = () => {
  return(
    <section
      className="w-full mx-auto flex flex-col-reverse md:flex-row justify-between gap-x-10 items-top"
    >
      <div
        className="flex justify-center flex-col px-6 md:py-6 xl:px-0 space-y-6 gap-4 md:gap-2 lg:max-w-md md:max-w-sm"
      >
        <div className="sm:mt-20 md:mt-35 flex flex-col gap-2">
          <div id="tag" className="pb-3">
            <Tag
              text="Open to Work 👩‍💻"
              variant="yellow"
              delay={1.3}
            />
          </div>
          <H4 text="Freelance Graphic Designer · Front-End Dev" />
          <H1 text="Hi, my name is Mónica Galán" />
        </div>
        <p>
          Front-end Developer with a passion for web design and design systems.
          Skilled at crafting user-friendly and visually appealing interfaces,
          with a commitment to creating innovative web experiences and
          continuously advancing front-end development skills.
        </p>
      </div>
      <div className="w-full h-auto pl-5 mx-0">
        <img className="w-full" src="images/image-hero.png" alt="" />
      </div>
    </section>
  )
}

export default Hero;
