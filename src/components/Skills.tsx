import { FC } from 'react'
import { Skill } from '../types'
import Accordion from './UI/Accordion'
import Badge from './UI/Badge'

const Skills: FC<{
  subTitle: string
  object: Skill[]
  accordionIsOpen?: boolean
}> = ({ subTitle, object, accordionIsOpen = false }) => {
  return (
    <>
      <>
        <Accordion
          subTitle={subTitle}
          accordionIsOpen={accordionIsOpen}
          reactElement={<List object={object} />}
        />
      </>
    </>
  )
}

const Element: FC<{ element: Skill }> = ({ element }) => {
  const image = (
    <img
      src={element.image_link}
      alt={element.image_alt}
      className="rounded-sm w-12 self-center"
      loading="lazy"
    />
  )

  return (
    <>
      <a
        href={element.website}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col justify-between hover:scale-105 transition"
      >
        <Badge text={element.language_name} reactElement={image} />
      </a>
    </>
  )
}

const List: FC<{ object: Skill[] }> = ({ object }) => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {object?.map((o, index) => <Element element={o} key={index} />)}
      </div>
    </>
  )
}

export default Skills
