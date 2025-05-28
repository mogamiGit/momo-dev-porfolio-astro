import React from 'react'
import HighlightedTitle from '../atoms/HighlightedTitle'

export const SplitLine: React.FC = () => {
  return (
    <div className="border-r hidden md:block border-gray-300 w-3"></div>
  )
}

const HighlightPoints: React.FC = () => {
  return (
    <section
      id="sintetic"
      className="w-full mx-auto flex md:flex-row sm:flex-col justify-center gap-10 px-8 flex-wrap"
    >
      <HighlightedTitle
        title="8+"
        subtitle="Years of Experience"
      />
      <SplitLine />
      <HighlightedTitle
        title="Multidisciplinary"
        subtitle="Profesional profile"
      />
      <SplitLine />
      <HighlightedTitle
        title="UX / UI"
        subtitle="Design passionate"
      />
    </section>
  )
}

export default HighlightPoints;