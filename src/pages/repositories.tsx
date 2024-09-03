import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Error from '../components/Error'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Profil from '../components/Profil'
import Repos from '../components/Repos'
import {
  owner,
  useGetAccountFollowersQuery,
  useGetAccountFollowingsQuery,
  useGetAccountInfosQuery,
  useGetAccountReposQuery,
} from '../services/getData'
import HireMe from '../components/HireMe'

const RepositoriesPage = () => {
  const location = useLocation()
  const [query, setQuery] = useState<string>(owner)

  useEffect(() => {
    setQuery(
      location.search?.split('=')[1]?.length
        ? location.search?.split('=')[1]
        : owner
    )
  }, [location])

  const { data, isLoading, error } = useGetAccountInfosQuery(query)
  const { data: repos, isLoading: isLoadingRepos } =
    useGetAccountReposQuery(query)
  const { data: followers } = useGetAccountFollowersQuery(query)
  const { data: followings } = useGetAccountFollowingsQuery(query)

  if (isLoading) return <Loader />
  if (error || !data) return <Loader reactElement={<Error />} />

  return (
    <>
      <Header account={data?.data} />
      <section className="py-12 flex flex-col gap-8">
        <Profil
          account={data?.data}
          followers={followers?.data?.data ?? []}
          followings={followings?.data?.data ?? []}
        />
        <HireMe account={data?.data} />
        <Repos
          repositories={repos ? repos?.data : []}
          isLoading={isLoadingRepos}
          onlyFive={false}
        />
      </section>
      <Footer account={data?.data} />
    </>
  )
}

export default RepositoriesPage
