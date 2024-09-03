import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AboutMe from '../components/AboutMe'
import Achivements from '../components/Achivements'
import ContactMe from '../components/ContactMe'
import Error from '../components/Error'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HireMe from '../components/HireMe'
import Loader from '../components/Loader'
import Organizations from '../components/Organizations'
import Profil from '../components/Profil'
import Repos from '../components/Repos'
import Search from '../components/Search'
import Summary from '../components/Summary'
import {
  owner,
  useGetAccountFollowersQuery,
  useGetAccountFollowingsQuery,
  useGetAccountInfosQuery,
  useGetAccountOrgsQuery,
  useGetAccountReposQuery,
  useGetAchivementsQuery,
} from '../services/getData'

const MainPage = () => {
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
  const { data: orgs } = useGetAccountOrgsQuery(query)
  const { data: followers } = useGetAccountFollowersQuery(query)
  const { data: followings } = useGetAccountFollowingsQuery(query)
  const { data: achivements } = useGetAchivementsQuery(query)

  if (isLoading) return <Loader />
  if (error || !data) return <Loader reactElement={<Error />} />

  return (
    <>
      <Header account={data.data} />
      <section className="py-12 flex flex-col gap-8">
        <Profil
          account={data.data}
          followers={followers?.data?.data ?? []}
          followings={followings?.data?.data ?? []}
        />
        <HireMe account={data.data} />
        <AboutMe account={data?.data} />
        <Search />
        <Achivements achivements={achivements ?? []} />
        {orgs?.data?.data?.length ? (
          <Organizations orgs={orgs ? orgs?.data?.data : []} />
        ) : null}
        <Repos
          repositories={repos ? repos?.data : []}
          isLoading={isLoadingRepos}
        />
        <Summary
          repositories={repos ? repos?.data : []}
          isLoading={isLoadingRepos}
        />
        <ContactMe account={data.data} />
      </section>
      <Footer account={data?.data} />
    </>
  )
}

export default MainPage
