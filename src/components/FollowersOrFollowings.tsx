import { FC } from 'react'
import { Follower } from '../types'
import getTextAsTitle from '../utils/getTextAsTitle'
import FollowerOrFollowing from './UI/FollowerOrFollowing'

const FollowersOrFollowings: FC<{ followers: Follower[] }> = ({
  followers,
}) => {
  return (
    <>
      <ul className="flex -space-x-4 mt-4">
        {followers?.slice(0, 15).map((follower, index) => (
          <li key={index} className="hover:pr-6 group relative">
            <FollowerOrFollowing follower={follower} />
            <span className="cursor-help absolute -bottom-4 right-1/4 scale-0 bg-bgd text-sec rounded px-2 text-xs group-hover:scale-100">
              {getTextAsTitle(follower.login)}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
export default FollowersOrFollowings
