import { FC } from 'react'
import { Account } from '../types'
import Article from './Article'
import SendEmail from './SendEmail'
import Socials from './Socials'

const ContactMe: FC<{ account: Account }> = ({ account }) => {
  const content = (
    <>
      <div className="pt-4 flex flex-wrap gap-4 items-center self-end">
        <Socials account={account} />
        {account.email && <SendEmail mail={account.email} />}
      </div>
    </>
  )

  return (
    <>
      <Article
        title="Contact me"
        text="Find me on my social networks or send me an email."
        reactElement={content}
      />
    </>
  )
}

export default ContactMe
