import { FC } from 'react'
import { Follower } from '../../types'
import Image from './Image'

const FollowerOrFollowing: FC<{ follower: Follower }> = ({ follower }) => {
  return (
    <>
      <div className="blur-xs hover:blur-none transition">
        <Image imageUrl={follower.avatar_url} url={follower.login} />
      </div>
    </>
  )
}
export default FollowerOrFollowing
