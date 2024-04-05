import ExperiencesOrEductations from '../components/ExperiencesOrEductations'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Profil from '../components/Profil'
import {
  owner,
  useGetAccountFollowersQuery,
  useGetAccountFollowingsQuery,
  useGetAccountInfosQuery,
} from '../services/getData'
import { experiences } from '../objects/Experiences'
import educations from '../objects/Educations'
import Skills from '../components/Skills'
import skills from '../objects/Skills'
import Error from '../components/Error'
import Hero from '../components/Hero'

const AboutPage = () => {
  const { data, isLoading, error } = useGetAccountInfosQuery(owner)
  const { data: followers } = useGetAccountFollowersQuery(owner)
  const { data: followings } = useGetAccountFollowingsQuery(owner)

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
        <Hero account={data?.data} />
        <Skills subTitle={'My skills'} object={skills} accordionIsOpen={true} />
        <ExperiencesOrEductations object={educations} subTitle={'My studies'} />
        <ExperiencesOrEductations
          object={experiences}
          subTitle={'My experiences'}
        />
      </section>
      <Footer account={data?.data} />
    </>
  )
}

export default AboutPage
