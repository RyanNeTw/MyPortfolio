import { FC, useState } from 'react'
import { Account, Follower } from '../types'
import { BadgeProfilEnum } from '../types/Enums'
import getDate from '../utils/getDate'
import getTextAsTitle from '../utils/getTextAsTitle'
import Article from './Article'
import FollowersOrFollowings from './FollowersOrFollowings'
import Socials from './Socials'
import Badge from './UI/Badge'
import Paragraphe from './UI/Paragraphe'
import ProfilPicture from './UI/ProfilPicture'

const Profil: FC<{
  account: Account
  followers: Follower[]
  followings: Follower[]
}> = ({ account, followers, followings }) => {
  const [badgeState, setBadgeState] = useState<BadgeProfilEnum>(
    BadgeProfilEnum.NONE
  )

  const ChangeBadgeState = (state: BadgeProfilEnum) => {
    console.log(state, badgeState)
    if (badgeState === state) {
      setBadgeState(BadgeProfilEnum.NONE)
      return
    }
    setBadgeState(state)
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <ProfilPicture account={account} />
          <Paragraphe
            text={`Since ${getDate(account.created_at)}`}
            size={true}
          />
        </div>
        <Paragraphe text={account.bio} />
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <div
            onClick={() => ChangeBadgeState(BadgeProfilEnum.FOLLOWERS)}
            className={`${followers?.length > 0 && 'cursor-pointer'}`}
          >
            <Badge text={`${account.followers.toString()} Followers`} />
          </div>
          <div
            onClick={() => ChangeBadgeState(BadgeProfilEnum.FOLLOWINGS)}
            className={`${followings?.length > 0 && 'cursor-pointer'}`}
          >
            <Badge text={`${account.following.toString()} Followings`} />
          </div>
          <Badge text={`${account.public_repos.toString()} Public repos`} />
          {account.total_private_repos && (
            <Badge
              text={`${account.total_private_repos.toString()} Private repos`}
            />
          )}
        </div>
        <Socials account={account} />
        {badgeState === BadgeProfilEnum.FOLLOWERS && followers?.length > 0 && (
          <Article
            title="Followers"
            text={`Some of ${getTextAsTitle(account.name ?? account.login)}'s followers.`}
            reactElement={<FollowersOrFollowings followers={followers} />}
          />
        )}

        {badgeState === BadgeProfilEnum.FOLLOWINGS &&
          followings?.length > 0 && (
            <Article
              title="Followings"
              text={`Some of ${getTextAsTitle(account.name ?? account.login)}'s  followings.`}
              reactElement={<FollowersOrFollowings followers={followings} />}
            />
          )}
      </div>
    </>
  )
}

export default Profil
