import { FC } from 'react'
import { Skill } from '../types'
import getTextAsTitle from '../utils/getTextAsTitle'
import Accordion from './UI/Accordion'
import Badge from './UI/Badge'
import { isSkillsIcons } from '../types/skillsIcons'

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

export const ElementSkill: FC<{ element: Skill }> = ({ element }) => {
  let image =  (
    <img
      src={
        element.image_link ??
        `https://skillicons.dev/icons?i=${element.language_name}`
      }
      alt={`${getTextAsTitle(element.language_name)}'s logo`}
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
        <Badge
          text={getTextAsTitle(element.language_name)}
          {...(image && { reactElement: image })}
        />
      </a>
    </>
  )
}

const List: FC<{ object: Skill[] }> = ({ object }) => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {object?.map((o, index) => <ElementSkill element={o} key={index} />)}
      </div>
    </>
  )
}

export default Skills
