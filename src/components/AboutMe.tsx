import { FC } from 'react'
import { Link } from 'react-router-dom'
import { owner } from '../services/getData'
import { Account } from '../types'
import Article from './Article'
import Button from './UI/Button'
import Paragraphe from './UI/Paragraphe'

const AboutMe: FC<{ account: Account }> = ({ account }) => {
  if (account.login !== owner) return null

  return (
    <>
      <Article
        title="About me"
        text="Click to see my profile."
        reactElement={<Content />}
      />
    </>
  )
}

const Content = () => {
  return (
    <>
      <div className="flex flex-col">
        <Paragraphe
          text="Greetings! Allow me to introduce myself: I am a burgeoning developer located in the heart of Paris. Presently, I'm navigating through my third year at the IIM Digital School in Nanterre, all while engaging in a fulfilling apprenticeship at Billy, a pivotal hub for financial tools."
          size={true}
        />
        <Paragraphe
          text="I enthusiastically encourage you to delve into my professional journey and personal endeavors. Within, you will uncover an array of captivating and groundbreaking accomplishments."
          size={true}
        />
        <Link to={'/about'} className="self-end mt-2">
          <Button text="Learn more" />
        </Link>
      </div>
    </>
  )
}
export default AboutMe
