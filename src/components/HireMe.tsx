import { FC } from 'react'
import { Account } from '../types'
import Article from './Article'
import SendEmail from './SendEmail'

const HireMe: FC<{ account: Account }> = ({ account }) => {
  if (!account.hireable) return null

  const Content = account.email ? (
    <>
      <div className="self-end">
        <SendEmail mail={account.email} text="Hire me" />
      </div>
    </>
  ) : null

  return (
    <>
      <Article
        title="Hire me"
        text="I am available to create the perfect web experience for you."
        reactElement={Content}
      />
    </>
  )
}

export default HireMe
