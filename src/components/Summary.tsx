import { FC } from 'react'
import { Repo } from '../types'
import Article from './Article'
import Loader from './Loader'
import PieChart from './UI/PieChart'
import Skelton from './UI/Skelton'

const LoadingSkelton = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-y-4 mt-4">
        <Skelton size="h-56 w-mid" />
        <Skelton size="h-56 w-mid" />
      </div>
    </>
  )
}

const Summary: FC<{ isLoading: boolean; repositories: Repo[] }> = ({
  isLoading,
  repositories,
}) => {
  if (isLoading || !repositories) {
    return (
      <>
        <Article
          title="Summary"
          text="Here are the languages I used the most during the development of my repos."
          reactElement={<LoadingSkelton />}
        />
      </>
    )
  }

  if (!repositories?.length) return null

  const repos = repositories
    .slice()
    ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
  const languages = repos
    ?.map((repo) => repo.language)
    .filter(Boolean) as string[]

  const content = (
    <>
      {isLoading || !repositories ? (
        <Loader />
      ) : (
        <div className="md:w-1/2 w-full gap-2 self-end">
          <PieChart languages={languages} />
        </div>
      )}
    </>
  )

  return (
    <>
      <Article
        title="Summary"
        text="Here are the languages I used the most during the development of my repos."
        reactElement={content}
      />
    </>
  )
}

export default Summary
