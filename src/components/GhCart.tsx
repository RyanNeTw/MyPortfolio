import { FC } from 'react'
import { owner } from '../services/getData'
import Article from './Article'

const GhChart: FC<{ user?: string }> = ({ user = owner }) => {
  return (
    <>
      <Article
        title="Contributions"
        reactElement={
          <div className="">
            <img
              src={`https://ghchart.rshah.org/fb923c/${user}`}
              alt={`${user} github chart`}
            ></img>
          </div>
        }
      />
    </>
  )
}
export default GhChart
