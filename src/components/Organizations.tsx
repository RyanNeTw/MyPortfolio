import { FC } from 'react'
import { Organization } from '../types'
import Article from './Article'
import Badge from './UI/Badge'

const Organizations: FC<{ orgs: Organization[] }> = ({ orgs }) => {
  const organizations = (
    <>
      <div className="flex flex-wrap gap-2">
        {orgs?.map((o, index) => <Org key={index} org={o} />)}
      </div>
    </>
  )

  return (
    <>
      <Article
        title="Organizations"
        text="The organizations I belong to."
        reactElement={organizations}
      />
    </>
  )
}

const Org: FC<{ org: Organization }> = ({ org }) => {
  const image = (
    <>
      <img
        src={org.avatar_url}
        alt={org.description}
        className="rounded w-12"
        loading="lazy"
      />
    </>
  )
  return (
    <>
      <div>
        <Badge text={org.login} reactElement={image} />
      </div>
    </>
  )
}

export default Organizations
