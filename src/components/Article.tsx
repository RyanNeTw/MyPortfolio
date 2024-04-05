import { FC, ReactElement } from 'react'
import Paragraphe from './UI/Paragraphe'
import Title from './UI/Title'

const Article: FC<{
  title: string
  text?: string
  reactElement: ReactElement | null
}> = ({ title, text, reactElement }) => {
  return (
    <>
      <div className="flex flex-col">
        <Title title={title} />
        {text && <Paragraphe text={text} />}
        {reactElement ? (
          <div className="mt-4 flex flex-col">{reactElement}</div>
        ) : null}
      </div>
    </>
  )
}
export default Article
